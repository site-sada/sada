/*
  =====================================================================
  منطق صفحة /feed — يحتاج js/supabase-config.js و js/supabase-client.js
  محمّلين قبله (راجع وسوم <script> بأعلى feed/index.html).
  =====================================================================
*/
(function () {
  let me = null; // { user, profile }

  function initialOf(name) {
    return (name && name.trim().charAt(0)) || "ص";
  }

  function timeAgo(iso) {
    const diffSec = Math.max(1, Math.floor((Date.now() - new Date(iso).getTime()) / 1000));
    const mins = Math.floor(diffSec / 60);
    const hours = Math.floor(mins / 60);
    const days = Math.floor(hours / 24);
    if (days >= 1) return days === 1 ? "أمس" : `قبل ${days} أيام`;
    if (hours >= 1) return `قبل ${hours} ساعات`;
    if (mins >= 1) return `قبل ${mins} دقيقة`;
    return "الآن";
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str || "";
    return div.innerHTML;
  }

  async function loadPosts() {
    const list = document.getElementById("postsList");
    list.innerHTML = "";

    const { data: posts, error } = await SadaAuth.client
      .from("posts")
      .select("id, content, created_at, user_id, profiles(name, username), likes(count), comments(count)")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error || !posts) { return; }

    // نجيب أي بوستات عاجبة المستخدم الحالي بطلب وحد (بدل طلب لكل بوست)
    let likedIds = new Set();
    if (posts.length) {
      const { data: myLikes } = await SadaAuth.client
        .from("likes")
        .select("post_id")
        .eq("user_id", me.user.id)
        .in("post_id", posts.map(p => p.id));
      if (myLikes) likedIds = new Set(myLikes.map(l => l.post_id));
    }

    posts.forEach((p, i) => {
      const authorName = (p.profiles && p.profiles.name) || "مستخدم صدى";
      const authorHandle = (p.profiles && p.profiles.username) ? "@" + p.profiles.username : "";
      const likeCount = (p.likes && p.likes[0] && p.likes[0].count) || 0;
      const commentCount = (p.comments && p.comments[0] && p.comments[0].count) || 0;
      const liked = likedIds.has(p.id);

      const el = document.createElement("div");
      el.className = "post";
      el.style.animationDelay = (i * 0.06) + "s";
      el.innerHTML = `
        <div class="avatar" style="background:linear-gradient(135deg,var(--cyan),var(--violet));">${escapeHtml(initialOf(authorName))}</div>
        <div class="post-body">
          <div class="post-head">
            <span class="name">${escapeHtml(authorName)}</span>
            <span class="handle">${escapeHtml(authorHandle)}</span>
            <span class="time">· ${timeAgo(p.created_at)}</span>
          </div>
          <div class="post-text">${escapeHtml(p.content)}</div>
          <div class="post-actions">
            <button class="action reply" disabled>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              <span class="count">${commentCount}</span>
            </button>
            <button class="action repost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m17 2 4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
              <span class="count">0</span>
            </button>
            <button class="action like${liked ? " liked" : ""}" data-post-id="${p.id}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
              <span class="count">${likeCount}</span>
              <span class="ripple"><span></span></span>
            </button>
            <button class="action echo" title="صدى">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></svg>
            </button>
          </div>
        </div>
      `;
      list.appendChild(el);
    });

    // تفويض حدث النقر لأزرار الإعجاب (بدل onclick مضمّن لكل بوست)
    list.querySelectorAll(".action.like").forEach(btn => {
      btn.addEventListener("click", () => toggleLike(btn));
    });
  }

  async function toggleLike(btn) {
    const postId = btn.getAttribute("data-post-id");
    const countEl = btn.querySelector(".count");
    const wasLiked = btn.classList.contains("liked");
    let count = parseInt(countEl.textContent, 10) || 0;

    // تحديث فوري بالواجهة (تجربة استخدام سلسة)، ثم مزامنة حقيقية مع القاعدة
    btn.classList.toggle("liked");
    countEl.textContent = wasLiked ? count - 1 : count + 1;
    const ripple = btn.querySelector(".ripple");
    ripple.classList.remove("go"); void ripple.offsetWidth; ripple.classList.add("go");

    if (wasLiked) {
      const { error } = await SadaAuth.client.from("likes").delete()
        .eq("post_id", postId).eq("user_id", me.user.id);
      if (error) { btn.classList.add("liked"); countEl.textContent = count; }
    } else {
      const { error } = await SadaAuth.client.from("likes")
        .insert({ post_id: postId, user_id: me.user.id });
      if (error) { btn.classList.remove("liked"); countEl.textContent = count; }
    }
  }

  async function publishPost() {
    const input = document.getElementById("composeInput");
    const content = input.value.trim();
    if (!content) return;
    const postBtn = document.getElementById("postBtn");
    postBtn.disabled = true;

    const { error } = await SadaAuth.client.from("posts").insert({
      user_id: me.user.id,
      content
    });

    postBtn.disabled = false;
    if (!error) {
      input.value = "";
      postBtn.classList.remove("ready");
      loadPosts();
    }
  }

  window.handleCompose = function (el) {
    document.getElementById("postBtn").classList.toggle("ready", el.value.trim().length > 0);
  };

  document.addEventListener("DOMContentLoaded", async function () {
    me = await SadaAuth.requireAuth();
    if (!me) return; // requireAuth يتكفّل بالتحويل لو ما فيه جلسة/يوزرنيم

    document.getElementById("myAvatar").textContent = initialOf(me.profile.name);
    document.getElementById("myName").textContent = me.profile.name || "";
    document.getElementById("myHandle").textContent = "‎@" + (me.profile.username || "");
    document.getElementById("composeAvatar").textContent = initialOf(me.profile.name);

    document.getElementById("logoutLink").addEventListener("click", function (e) {
      e.preventDefault();
      SadaAuth.signOut();
    });

    document.getElementById("postBtn").addEventListener("click", publishPost);

    loadPosts();
  });
})();

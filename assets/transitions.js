/* انتقالات وحركات مشتركة بين كل صفحات صدى — يشتغل من نفس المصدر بدل
   تكرار نفس المنطق بكل صفحة (زي assets/i18n.js بالضبط).
   ملاحظة: حركة "دخول الصفحة" نفسها تُضاف فورًا بسطر inline بعد وسم
   <body> مباشرة بكل صفحة (قبل تحميل هذا الملف)، عشان تشتغل حتى لو
   تأخر تحميل هذا الملف الخارجي أو فشل — هذا الملف يضيف فقط: حركة
   الخروج عند التنقل، والاهتزاز التلقائي لأي خطأ.
   دعم prefers-reduced-motion موجود بملف transitions.css نفسه. */
(function () {
  var REDUCE = false; // تم تعطيل احترام إعداد "تقليل الحركة" بالجهاز عمدًا — الأنيميشن يشتغل دايمًا

  // ===== انتقال بحركة خروج لأي زر/عنصر مو <a> (مثلاً radio switcher
  // تسجيل الدخول/إنشاء حساب) — بدونها كان location.href يشتغل فورًا
  // بدون أي حركة، فيحس المستخدم إن التبديل "ميت" لين تخلص الصفحة
  // تحميلها. نفس منطق وتوقيت حركة خروج الروابط بالضبط (170ms). =====
  window.sadaNavigate = function (url) {
    if (REDUCE) { location.href = url; return; }
    document.body.classList.remove("sada-pre");
    document.body.classList.add("sada-page-leaving");
    setTimeout(function () { location.href = url; }, 170);
  };

  // ===== حركة خروج سلسة عند الانتقال لصفحة داخلية ثانية =====
  // بدل ما ينتقل المتصفح فجأة، نلاشي الصفحة الحالية أولاً بحركة قصيرة
  // ثم ننتقل — يخلي المستخدم يحس إن الموقع "يتفاعل" معه بدل قفزة جافة.
  document.addEventListener("click", function (e) {
    if (REDUCE) return;
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    var a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    if (a.target === "_blank" || a.hasAttribute("download")) return;

    var url;
    try { url = new URL(a.href, location.href); } catch (err) { return; }
    if (url.origin !== location.origin) return;
    // رابط لنفس الصفحة (Anchor #) ما يحتاج حركة خروج
    if (url.pathname === location.pathname && url.search === location.search && url.hash) return;

    e.preventDefault();
    document.body.classList.remove("sada-pre");
    document.body.classList.add("sada-page-leaving");
    setTimeout(function () { location.href = a.href; }, 170);
  });

  // لو رجع المستخدم من ذاكرة المتصفح (bfcache) لازم نضمن الصفحة تبان
  // طبيعي فورًا، بدون ما تعلق بحالة "خروج" أو تعيد حركة الدخول من الصفر.
  window.addEventListener("pageshow", function () {
    document.body.classList.remove("sada-page-leaving");
  });

  // ===== زر الرجوع (يعتمد على تسلسل منطقي ثابت للصفحات، مو سجل المتصفح) =====
  // قبل كذا كان يعتمد على history.back()/document.referrer، وهذا غير
  // موثوق: لو المستخدم فتح الصفحة برابط مباشر، أو جا من صفحة خارجية،
  // أو أعاد تحميلها، الرجوع كان يودّيه لمكان عشوائي أو خارج الموقع.
  // الحين كل صفحة لها "أب" ثابت بتسلسل التطبيق نفسه، بغض النظر عن كيف
  // المستخدم توصّل لها فعليًا — بالضبط زي: إنشاء حساب ← تسجيل الدخول ← المقدمة.
  var BACK_MAP = {
    '/login': '/', '/login.html': '/',
    '/signup': '/login', '/signup.html': '/login',
    '/forgot': '/login', '/forgot.html': '/login',
    '/reset': '/forgot', '/reset.html': '/forgot',
    '/verify': '/signup', '/verify.php': '/signup',
    '/choose-username': '/verify', '/choose-username.php': '/verify'
  };

  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest(".topbar-back");
    if (!btn) return;
    e.preventDefault();

    var path = location.pathname.replace(/\/+$/, "") || "/";
    var target = BACK_MAP[path] || "/";

    if (REDUCE) {
      location.href = target;
      return;
    }
    document.body.classList.remove("sada-pre");
    document.body.classList.add("sada-page-leaving");
    setTimeout(function () { location.href = target; }, 170);
  });

  // ===== اهتزاز تلقائي لأي خطأ (رسالة أو حقل) بأي صفحة =====
  // نراقب أي عنصر تُضاف له class="...field-error..." أو رسالة
  // form-msg تتحول لـ error/success — ونشغّل الحركة المناسبة تلقائيًا
  // بدل ما نضيف نفس الكود يدويًا بكل صفحة على حدة.
  function restart(el, cls) {
    el.classList.remove(cls);
    void el.offsetWidth; // إجبار reflow عشان الحركة تُعاد من الصفر
    el.classList.add(cls);
  }

  // نقارن قيمة الكلاس قبل وبعد التغيير، ونتأكد إن الكلاس اللي يهمنا
  // (field-error أو show) "انضاف فعلاً بهذا التغيير بالذات" — مو موجود
  // من قبل. بدون هذا الفحص، restart() نفسها (شيل/رجّع sada-shake) تعتبر
  // "تغيير كلاس" وتشغّل المراقب من جديد على نفس العنصر بحلقة لا نهائية
  // (لأن field-error يبقى موجود بعد restart)، وهذا كان يجمّد الصفحة كاملة.
  function classNewlyAdded(oldValue, newValue, cls) {
    var hadBefore = oldValue ? ((' ' + oldValue + ' ').indexOf(' ' + cls + ' ') !== -1) : false;
    var hasNow = (' ' + newValue + ' ').indexOf(' ' + cls + ' ') !== -1;
    return hasNow && !hadBefore;
  }

  function handleMutation(el, oldValue) {
    if (!(el instanceof Element)) return;
    var newValue = el.className;

    if (classNewlyAdded(oldValue, newValue, "field-error")) {
      restart(el, "sada-shake");
    }

    if (classNewlyAdded(oldValue, newValue, "show") && el.classList.contains("form-msg")) {
      if (el.classList.contains("error")) restart(el, "sada-shake");
      restart(el, "sada-msg-pop");
    }
  }

  function init() {
    if (REDUCE) return;
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) { handleMutation(m.target, m.oldValue); });
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"], attributeOldValue: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

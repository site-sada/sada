/*
  =====================================================================
  عميل Supabase المشترك — لا تعدّل هذا الملف.
  يعتمد على مكتبة supabase-js (تُحمَّل من CDN بوسم <script> قبل هذا الملف)
  وعلى js/supabase-config.js (لازم يُحمَّل قبل هذا الملف أيضًا).
  =====================================================================
*/
(function () {
  if (!window.SADA_CONFIG || !window.supabase) {
    console.error("Sada: supabase-config.js أو مكتبة supabase-js غير محمّلة.");
    return;
  }

  const client = window.supabase.createClient(
    window.SADA_CONFIG.SUPABASE_URL,
    window.SADA_CONFIG.SUPABASE_ANON_KEY
  );

  // ===== أدوات مشتركة تستخدمها كل الصفحات =====
  const SadaAuth = {
    client,

    /** يرجع المستخدم الحالي (أو null) */
    async getUser() {
      const { data, error } = await client.auth.getUser();
      if (error) return null;
      return data.user;
    },

    /** يرجع بروفايل المستخدم الحالي من جدول profiles */
    async getProfile(userId) {
      const { data, error } = await client
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();
      if (error) return null;
      return data;
    },

    /** تسجيل خروج */
    async signOut() {
      await client.auth.signOut();
      window.location.href = "/login/";
    },

    /**
     * حماية صفحة تحتاج تسجيل دخول: لو ما فيه جلسة يرجّع لصفحة الدخول،
     * ولو الحساب ناقص اسم مستخدم يرجّع لصفحة اختيار اسم المستخدم.
     * استخدمها بأول كل صفحة محمية (مثل feed).
     */
    async requireAuth() {
      const user = await this.getUser();
      if (!user) {
        window.location.href = "/login/";
        return null;
      }
      const profile = await this.getProfile(user.id);
      if (!profile || !profile.username) {
        window.location.href = "/choose-username/";
        return null;
      }
      return { user, profile };
    },

    /** يحوّل "معرّف الدخول" (بريد أو يوزرنيم) إلى بريد إلكتروني فعلي */
    async resolveEmail(identifier) {
      if (identifier.indexOf("@") !== -1) return identifier;
      const { data, error } = await client.rpc("get_email_by_username", {
        p_username: identifier
      });
      if (error || !data) return null;
      return data;
    }
  };

  window.SadaAuth = SadaAuth;
})();

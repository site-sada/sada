/* i18n موحّد لكل صفحات صدى — يشتغل من نفس المصدر بدل تكرار القاموس بكل صفحة */
(function () {
  var DICT = {
    ar: {
      brand: "صدى",
      // index
      heroTitle: "وش يدور في بالك؟",
      heroDesc: "اكتبه، شاركه، وخله يوصل لناس يهتمون فيه.",
      signup: "إنشاء حساب",
      login: "تسجيل الدخول",
      whyTitle: "لماذا صدى؟",
      feat1: "سريع وسهل الاستخدام",
      feat2: "شارك أفكارك في ثوانٍ",
      feat3: "خصوصيتك وأمانك أولويتنا",
      footer: "© صدى — جميع الحقوق محفوظة",
      // login.html
      loginTitle: "تسجيل الدخول",
      loginSub: "أدخل بياناتك للمتابعة إلى حسابك",
      emailLabel: "البريد الإلكتروني",
      identifierLabel: "البريد الإلكتروني أو اسم المستخدم",
      passwordLabel: "كلمة المرور",
      remember: "تذكرني",
      forgotLink: "نسيت كلمة المرور؟",
      loginBtn: "تسجيل الدخول",
      loginLoading: "جارٍ الدخول...",
      noAccount: "ليس لديك حساب؟",
      createAccountLink: "إنشاء حساب جديد",
      // signup.html
      signupTitle: "إنشاء حساب",
      signupSub: "املأ البيانات التالية لإنشاء حسابك",
      nameLabel: "الاسم الكامل",
      confirmPasswordLabel: "تأكيد كلمة المرور",
      pwStrengthWeak: "ضعيفة",
      pwStrengthGood: "جيدة",
      pwStrengthStrong: "قوية جدًا",
      signupBtn: "إنشاء الحساب",
      signupLoading: "جارٍ إنشاء الحساب...",
      signupSent: "تم الإرسال",
      haveAccount: "لديك حساب بالفعل؟",
      // forgot.html
      forgotTitle: "استعادة كلمة المرور",
      forgotSub: "أدخل البريد الإلكتروني المرتبط بحسابك",
      sendCodeBtn: "إرسال كود الاستعادة",
      forgotSending: "جارٍ الإرسال...",
      rememberedPassword: "تذكرت كلمة المرور؟",
      // reset.html
      resetTitle: "تعيين كلمة مرور جديدة",
      resetSubDefault: "أدخل الكود وكلمة المرور الجديدة",
      resetSubWithEmailPrefix: "أدخل الكود المرسل إلى ",
      resetSubWithEmailSuffix: " مع كلمة المرور الجديدة",
      existingResetCodeNotice: "ما أرسلنا لك كود جديد — عندك كود إعادة تعيين صالح ينتهي خلال {minutes}، أدخله بالأسفل",
      existingResetCodeUsedNotice: "ما أرسلنا لك كود جديد — سبق واستخدمت الكود السابق لتغيير كلمة المرور، انتظر {minutes} ثم اطلب كود جديد",
      codeLabel: "كود التحقق (6 أرقام)",
      newPasswordLabel: "كلمة المرور الجديدة",
      changePasswordBtn: "تغيير كلمة المرور",
      resetSaving: "جارٍ الحفظ...",
      noCode: "ما وصلك الكود؟",
      requestAgain: "أعد الطلب",
      // verify.html
      verifyTitle: "أدخل كود التفعيل",
      stepAccount: "الحساب",
      stepVerify: "التفعيل",
      stepUsername: "اسم المستخدم",
      stepDone: "تم",
      backBtnLabel: "رجوع",
      verifySubDefault: "أدخل الكود اللي وصلك على بريدك الإلكتروني",
      verifySubWithEmailPrefix: "أرسلنا كود التفعيل إلى ",
      existingCodeNotice: "ما أرسلنا لك كود جديد — عندك كود تفعيل صالح وصلك قبل قليل، أدخله بالأسفل",
      activationCodeLabel: "كود التفعيل (6 أرقام)",
      activateBtn: "تفعيل الحساب",
      verifyChecking: "جارٍ التحقق...",
      resendSending: "جارٍ الإرسال...",
      resendAgain: "أعد الإرسال",
      noCodeQuestion: "ما وصلك الكود؟",
      noEmailSpecified: "ما فيه بريد إلكتروني محدد، ارجع لصفحة التسجيل",
      // page titles (تظهر في تبويب المتصفح فقط)
      loginPageTitle: "تسجيل الدخول — صدى",
      signupPageTitle: "إنشاء حساب — صدى",
      forgotPageTitle: "نسيت كلمة المرور — صدى",
      resetPageTitle: "إعادة تعيين كلمة المرور — صدى",
      verifyPageTitle: "تفعيل الحساب — صدى",
      pinPageTabTitle: "رمز PIN — صدى",
      feedPageTitle: "صدى",
      // رسائل تحقق من المدخلات (تُستخدم في جافاسكربت الصفحات)
      errEnterEmail: "يرجى إدخال البريد الإلكتروني",
      errValidEmail: "يرجى إدخال بريد إلكتروني صحيح",
      errEnterIdentifier: "يرجى إدخال البريد الإلكتروني أو اسم المستخدم",
      errValidIdentifier: "يرجى إدخال بريد إلكتروني أو اسم مستخدم صحيح",
      emailSuggestPrefix: "هل تقصد",
      emailSuggestUse: "نعم، صحّح",
      emailSuggestKeep: "لا، أرسل كما هو",
      errEnterPassword: "يرجى إدخال كلمة المرور",
      errEnterName: "يرجى إدخال الاسم الكامل",
      errPasswordMin8: "يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل",
      errEnterConfirmPassword: "يرجى تأكيد كلمة المرور",
      errPasswordMismatch: "كلمتا المرور غير متطابقتين",
      birthdateLabel: "تاريخ الميلاد",
      birthdatePlaceholder: "يوم / شهر / سنة",
      birthdateModalTitle: "اختر تاريخ ميلادك",
      cancelBtn: "إلغاء",
      doneBtn: "تم",
      errEnterBirthdate: "يرجى إدخال تاريخ الميلاد",
      errInvalidBirthdate: "تاريخ الميلاد غير صحيح",
      errAgeTooYoung: "يجب أن يكون عمرك 13 سنة على الأقل",
      chooseUsernamePageTitle: "اختر اسم المستخدم — صدى",
      chooseUsernameTitle: "اختر اسم المستخدم",
      chooseUsernameSub: "هذا هو الاسم اللي بيميّز حسابك في صدى",
      usernameLabel: "اسم المستخدم",
      usernamePlaceholder: "مثال: abdullah_m",
      chooseUsernameBtn: "متابعة",
      checkingUsername: "جارٍ التحقق...",
      usernameAvailableUI: "متاح ✓",
      usernameTakenUI: "محجوز ✗",
      errEnterUsername: "يرجى إدخال اسم المستخدم",
      errUsernameFormat: "3 إلى 20 حرفًا: أحرف/أرقام/شرطة سفلية فقط",
      errEnterCode: "يرجى إدخال الكود",
      errEnterVerifyCode: "يرجى إدخال كود التفعيل",
      errCode6Digits: "يرجى إدخال كود مكون من 6 أرقام",
      errNoEmailBackToForgot: "ما فيه بريد إلكتروني محدد، ارجع لصفحة \"نسيت كلمة المرور\"",
      errPinLength: "الرمز لازم يكون 4 أرقام بالضبط",
      errPinMismatch: "الرمزان غير متطابقين",
      networkError: "تعذر الاتصال بالخادم، حاول مرة أخرى",
      networkErrorShort: "تعذر الاتصال بالخادم",
      redirectingSuffix: " — جارٍ تحويلك...",
      resendVerificationLinkText: "إعادة إرسال كود التفعيل",
      namePlaceholder: "مثال: عبدالله محمد",
      newPasswordPlaceholder: "8 أحرف على الأقل",
      confirmPasswordPlaceholder: "أعد كتابة كلمة المرور",
      confirmNewPasswordPlaceholder: "أعد كتابتها",
      // pin.php (تفعيل رمز PIN اختياري بعد إنشاء الحساب)
      pinSetupTitle: "أضف رمز PIN (اختياري)",
      pinSetupSub: "طبقة حماية إضافية تُطلب منك عند كل دخول جديد",
      pinLabel: "رمز PIN",
      pinConfirmLabel: "تأكيد الرمز",
      pinActivateBtn: "تفعيل الرمز والمتابعة",
      pinSaving: "جارٍ الحفظ...",
      pinSkip: "تخطي هذي الخطوة الآن",
      // login_pin.php (إدخال رمز PIN أثناء تسجيل الدخول)
      loginPinTitle: "أدخل رمز PIN",
      loginPinSub: "حسابك محمي برمز إضافي — أدخله لإكمال تسجيل دخولك",
      loginPinConfirmBtn: "تأكيد الدخول",
      loginPinChecking: "جارٍ التحقق...",
      loginPinNotYou: "مو أنت؟",
      backToLogin: "رجوع لتسجيل الدخول",
      // feed.php chrome
      homeTitle: "الرئيسية",
      exploreTitle: "استكشاف",
      notificationsTitle: "الإشعارات",
      messagesTitle: "الرسائل",
      savedTitle: "المحفوظات",
      profileTitle: "الملف الشخصي",
      composeBtnLabel: "غرّد بصدى",
      logoutLabel: "خروج",
      liveNow: "مباشر الآن",
      composePlaceholder: "شنو صدى اليوم؟",
      imageTitle: "صورة",
      pollTitle: "استطلاع",
      emojiTitle: "إيموجي",
      postBtn: "نشر",
      searchPlaceholder: "ابحث في صدى",
      trendingTitle: "الأكثر تداولاً",
      showMore: "عرض المزيد",
      suggestedTitle: "حسابات تستحق المتابعة",
      followBtn: "متابعة",
      pageTitle: "صدى — مساحتك للتعبير والتواصل",
      // index.html — مقدمة وقسم "من نحن" و"لماذا صدى"
      introLine1: "ليس كل ما يُكتب يستحق أن يُسمع.",
      introLine2: "وصدى... المكان الذي يبدأ فيه صوت الإنسان الحقيقي.",
      startNowBtn: "ابدأ الآن",
      noticeTitle: "تنبيه",
      noticeLine1: "الموقع حاليًا في نسخة تجريبية، ويعمل على استضافة مجانية.",
      noticeLine2: "لهذا قد يعرض متصفح Chrome تحذيرًا أمنيًا بسبب سمعة النطاق فقط — وليس بسبب وجود أي تصيّد في الموقع.",
      noticeLine3: "نحن لا نطلب أي بيانات مالية إطلاقًا.",
      noticeLine4: "وإذا لم تكن مرتاحًا، يمكنك ببساطة انتظار إطلاق النسخة على الدومين الرسمي.",
      aboutTitle: "من نحن؟",
      aboutText: "بدأ صدى بفكرة بسيطة: أن يكون لكل شخص مكان يشارك فيه صوته، ويجد أشخاصًا يشاركونه شغفه. نسعى لبناء منصة تجعل التواصل أكثر بساطة، وأكثر معنى.",
      whyChooseTitle: "لماذا يختار المستخدمون صدى؟",
      whyChooseSub: "ركز على المحتوى الذي يهمك بدل الضجيج.",
      newFeat1Title: "سرعة وبساطة",
      newFeat1Desc: "واجهة خفيفة وسهلة الاستخدام.",
      newFeat2Title: "اهتماماتك أولًا",
      newFeat2Desc: "اكتشف محتوى يناسب ما تحب.",
      newFeat3Title: "مجتمعات حقيقية",
      newFeat3Desc: "انضم إلى أشخاص يشاركونك شغفك.",
      newFeat4Title: "تحكم في خصوصيتك",
      newFeat4Desc: "اختر من يرى محتواك وكيف تتفاعل.",
      newFeat5Title: "تجربة أقل إزعاجًا",
      newFeat5Desc: "تصميم يركز على القراءة والتفاعل، لا على تشتيت الانتباه.",
      newFeat6Title: "تصميم عصري",
      newFeat6Desc: "تجربة مريحة في الوضعين الفاتح والداكن.",
      newFeat7Title: "تفاعل بحرية",
      newFeat7Desc: "إعجابات، تعليقات، ومشاركة في مكان واحد.",
      newFeat8Title: "أمان وخصوصية",
      newFeat8Desc: "لأن الثقة تبدأ بحماية المستخدم.",
      newFeat9Title: "يتطور باستمرار",
      newFeat9Desc: "ميزات وتحسينات جديدة مع مرور الوقت.",
      newFeat10Title: "صوتك له قيمة",
      newFeat10Desc: "شارك أفكارك وشارك في نقاشات مفيدة.",
      newFeat11Title: "مصممة للهاتف أولًا",
      newFeat11Desc: "تجربة سلسة على الجوال دون تعقيد."
    },
    en: {
      brand: "Sada",
      heroTitle: "What's on your mind?",
      heroDesc: "Write it, share it, and let it reach people who care.",
      signup: "Create account",
      login: "Log in",
      whyTitle: "Why Sada?",
      feat1: "Fast and easy to use",
      feat2: "Share your thoughts in seconds",
      feat3: "Your privacy and security come first",
      footer: "© Sada — All rights reserved",
      loginTitle: "Log in",
      loginSub: "Enter your details to access your account",
      emailLabel: "Email",
      identifierLabel: "Email or username",
      passwordLabel: "Password",
      remember: "Remember me",
      forgotLink: "Forgot password?",
      loginBtn: "Log in",
      loginLoading: "Logging in...",
      noAccount: "Don't have an account?",
      createAccountLink: "Create a new account",
      signupTitle: "Create account",
      signupSub: "Fill in the details below to create your account",
      nameLabel: "Full name",
      confirmPasswordLabel: "Confirm password",
      pwStrengthWeak: "Weak",
      pwStrengthGood: "Good",
      pwStrengthStrong: "Very strong",
      signupBtn: "Create account",
      signupLoading: "Creating account...",
      signupSent: "Sent",
      haveAccount: "Already have an account?",
      forgotTitle: "Recover password",
      forgotSub: "Enter the email linked to your account",
      sendCodeBtn: "Send recovery code",
      forgotSending: "Sending...",
      rememberedPassword: "Remembered your password?",
      resetTitle: "Set a new password",
      resetSubDefault: "Enter the code and your new password",
      resetSubWithEmailPrefix: "Enter the code sent to ",
      resetSubWithEmailSuffix: " along with your new password",
      existingResetCodeNotice: "We didn't send a new code — you already have a valid reset code expiring in {minutes}, enter it below",
      existingResetCodeUsedNotice: "We didn't send a new code — you already used your previous code to change your password. Wait {minutes} then request a new one",
      codeLabel: "Verification code (6 digits)",
      newPasswordLabel: "New password",
      changePasswordBtn: "Change password",
      resetSaving: "Saving...",
      noCode: "Didn't get the code?",
      requestAgain: "Request again",
      verifyTitle: "Enter activation code",
      stepAccount: "Account",
      stepVerify: "Verify",
      stepUsername: "Username",
      stepDone: "Done",
      backBtnLabel: "Back",
      verifySubDefault: "Enter the code sent to your email",
      verifySubWithEmailPrefix: "We sent an activation code to ",
      existingCodeNotice: "We didn't send a new code — you already have a valid one from earlier, enter it below",
      activationCodeLabel: "Activation code (6 digits)",
      activateBtn: "Activate account",
      verifyChecking: "Verifying...",
      resendSending: "Sending...",
      resendAgain: "Resend",
      noCodeQuestion: "Didn't get the code?",
      noEmailSpecified: "No email specified, go back to the signup page",
      // page titles (browser tab only)
      loginPageTitle: "Log in — Sada",
      signupPageTitle: "Create account — Sada",
      forgotPageTitle: "Forgot password — Sada",
      resetPageTitle: "Reset password — Sada",
      verifyPageTitle: "Activate account — Sada",
      pinPageTabTitle: "PIN code — Sada",
      feedPageTitle: "Sada",
      // input validation messages (used in page JS)
      errEnterEmail: "Please enter your email",
      errValidEmail: "Please enter a valid email",
      errEnterIdentifier: "Please enter your email or username",
      errValidIdentifier: "Please enter a valid email or username",
      emailSuggestPrefix: "Did you mean",
      emailSuggestUse: "Yes, fix it",
      emailSuggestKeep: "No, send as is",
      errEnterPassword: "Please enter your password",
      errEnterName: "Please enter your full name",
      errPasswordMin8: "Password must be at least 8 characters",
      errEnterConfirmPassword: "Please confirm your password",
      errPasswordMismatch: "Passwords don't match",
      birthdateLabel: "Date of birth",
      birthdatePlaceholder: "Day / Month / Year",
      birthdateModalTitle: "Choose your date of birth",
      cancelBtn: "Cancel",
      doneBtn: "Done",
      errEnterBirthdate: "Please enter your date of birth",
      errInvalidBirthdate: "Invalid date of birth",
      errAgeTooYoung: "You must be at least 13 years old",
      chooseUsernamePageTitle: "Choose your username — Sada",
      chooseUsernameTitle: "Choose your username",
      chooseUsernameSub: "This is what identifies your account on Sada",
      usernameLabel: "Username",
      usernamePlaceholder: "e.g. abdullah_m",
      chooseUsernameBtn: "Continue",
      checkingUsername: "Checking...",
      usernameAvailableUI: "Available ✓",
      usernameTakenUI: "Taken ✗",
      errEnterUsername: "Please enter a username",
      errUsernameFormat: "3–20 characters: letters, numbers, or underscores only",
      errEnterCode: "Please enter the code",
      errEnterVerifyCode: "Please enter the activation code",
      errCode6Digits: "Please enter a 6-digit code",
      errNoEmailBackToForgot: "No email specified, go back to the \"Forgot password\" page",
      errPinLength: "The PIN must be exactly 4 digits",
      errPinMismatch: "The PINs don't match",
      networkError: "Couldn't connect to the server, please try again",
      networkErrorShort: "Couldn't connect to the server",
      redirectingSuffix: " — Redirecting...",
      resendVerificationLinkText: "Resend activation code",
      namePlaceholder: "e.g. John Smith",
      newPasswordPlaceholder: "8 characters minimum",
      confirmPasswordPlaceholder: "Re-enter your password",
      confirmNewPasswordPlaceholder: "Re-enter it",
      // pin.php (optional PIN setup after account creation)
      pinSetupTitle: "Add a PIN (optional)",
      pinSetupSub: "An extra layer of protection asked for at every login",
      pinLabel: "PIN code",
      pinConfirmLabel: "Confirm PIN",
      pinActivateBtn: "Activate PIN and continue",
      pinSaving: "Saving...",
      pinSkip: "Skip this step for now",
      // login_pin.php (entering PIN during login)
      loginPinTitle: "Enter your PIN",
      loginPinSub: "Your account is protected by an extra code — enter it to finish logging in",
      loginPinConfirmBtn: "Confirm login",
      loginPinChecking: "Verifying...",
      loginPinNotYou: "Not you?",
      backToLogin: "Back to login",
      homeTitle: "Home",
      exploreTitle: "Explore",
      notificationsTitle: "Notifications",
      messagesTitle: "Messages",
      savedTitle: "Saved",
      profileTitle: "Profile",
      composeBtnLabel: "Post a Sada",
      logoutLabel: "Log out",
      liveNow: "Live now",
      composePlaceholder: "What's your sada today?",
      imageTitle: "Image",
      pollTitle: "Poll",
      emojiTitle: "Emoji",
      postBtn: "Post",
      searchPlaceholder: "Search Sada",
      trendingTitle: "Trending now",
      showMore: "Show more",
      suggestedTitle: "Accounts worth following",
      followBtn: "Follow",
      pageTitle: "Sada — Your space to express and connect",
      // index.html — intro, about, and why-choose sections
      introLine1: "Not everything written deserves to be heard.",
      introLine2: "Sada... where a real human voice begins.",
      startNowBtn: "Get started",
      noticeTitle: "Notice",
      noticeLine1: "This site is currently a trial version, running on free hosting.",
      noticeLine2: "That's why Chrome may show a security warning due to the domain's reputation only — not because of any phishing on the site.",
      noticeLine3: "We never ask for any financial information.",
      noticeLine4: "If you're not comfortable, you can simply wait for the launch on our official domain.",
      aboutTitle: "Who we are",
      aboutText: "Sada started with a simple idea: everyone deserves a place to share their voice and find people who share their passions. We're building a platform that makes connecting simpler, and more meaningful.",
      whyChooseTitle: "Why do people choose Sada?",
      whyChooseSub: "Focus on the content that matters to you, not the noise.",
      newFeat1Title: "Fast and simple",
      newFeat1Desc: "A light, easy-to-use interface.",
      newFeat2Title: "Your interests first",
      newFeat2Desc: "Discover content that fits what you love.",
      newFeat3Title: "Real communities",
      newFeat3Desc: "Join people who share your passions.",
      newFeat4Title: "Control your privacy",
      newFeat4Desc: "Choose who sees your content and how you engage.",
      newFeat5Title: "A calmer experience",
      newFeat5Desc: "Designed for reading and engaging, not distraction.",
      newFeat6Title: "Modern design",
      newFeat6Desc: "A comfortable experience in both light and dark mode.",
      newFeat7Title: "Engage freely",
      newFeat7Desc: "Likes, comments, and sharing all in one place.",
      newFeat8Title: "Safety and privacy",
      newFeat8Desc: "Because trust starts with protecting our users.",
      newFeat9Title: "Always evolving",
      newFeat9Desc: "New features and improvements over time.",
      newFeat10Title: "Your voice matters",
      newFeat10Desc: "Share your ideas and join meaningful discussions.",
      newFeat11Title: "Built mobile-first",
      newFeat11Desc: "A smooth experience on your phone, without the clutter."
    }
  };

  var ALLOWED = ["ar", "en"];

  function getCookie(name) {
    var match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return match ? decodeURIComponent(match[1]) : null;
  }

  function setCookie(name, value, days) {
    var expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) +
      "; expires=" + expires + "; path=/; SameSite=Lax";
  }

  function detectLang() {
    var fromCookie = getCookie("sada_lang");
    if (ALLOWED.indexOf(fromCookie) !== -1) return fromCookie;
    try {
      var fromStorage = localStorage.getItem("sada_lang");
      if (ALLOWED.indexOf(fromStorage) !== -1) return fromStorage;
    } catch (e) {}
    var nav = (navigator.language || navigator.userLanguage || "ar").toLowerCase();
    return nav.indexOf("ar") === 0 ? "ar" : "en";
  }

  function applyLang(lang) {
    if (ALLOWED.indexOf(lang) === -1) lang = "ar";
    var dict = DICT[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] != null) el.placeholder = dict[key];
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-title");
      if (dict[key] != null) el.title = dict[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });
    var titleEl = document.querySelector("title[data-i18n]");
    if (!titleEl && dict.pageTitle) document.title = dict.pageTitle;

    var btnLabel = document.getElementById("langBtnLabel");
    if (btnLabel) btnLabel.textContent = lang === "ar" ? "EN" : "AR";

    // نخزن التفضيل بكوكيز (يشتغل بكل الصفحات وحتى لو المستخدم خرج من الموقع)
    // + localStorage كنسخة احتياطية سريعة، والسيرفر يتحقق ويعيد ضبط الكوكيز بنفسه
    setCookie("sada_lang", lang, 365);
    try { localStorage.setItem("sada_lang", lang); } catch (e) {}

    document.dispatchEvent(new CustomEvent("sada:langchange", { detail: { lang: lang } }));
  }

  function toggleLang() {
    var current = ALLOWED.indexOf(document.documentElement.lang) !== -1
      ? document.documentElement.lang : "ar";
    applyLang(current === "ar" ? "en" : "ar");
  }

  // نفس منطق ar_minutes_phrase()/en_minutes_phrase() بملف messages.php بالسيرفر —
  // لازم الصيغتين تتطابقن حتى ما تختلف الرسالة بين ما يجيه من الـ API
  // وبين اللي نبنيه بالواجهة نفسها (زي تنبيه reset.html).
  function minutesPhrase(lang, n) {
    n = parseInt(n, 10) || 0;
    if (lang === "ar") {
      if (n <= 0) return "أقل من دقيقة";
      if (n === 1) return "دقيقة واحدة";
      if (n === 2) return "دقيقتين";
      if (n >= 3 && n <= 10) return n + " دقائق";
      return n + " دقيقة";
    }
    if (n <= 0) return "less than a minute";
    return n + " " + (n === 1 ? "minute" : "minutes");
  }

  function t(key, vars) {
    var lang = ALLOWED.indexOf(document.documentElement.lang) !== -1 ? document.documentElement.lang : "ar";
    var text = DICT[lang][key] != null ? DICT[lang][key] : key;
    if (vars && typeof vars === "object") {
      Object.keys(vars).forEach(function (k) {
        var v = k === "minutes" ? minutesPhrase(lang, vars[k]) : vars[k];
        text = text.split("{" + k + "}").join(v);
      });
    }
    return text;
  }

  window.SadaI18n = { applyLang: applyLang, detectLang: detectLang, toggleLang: toggleLang, t: t, dict: DICT };

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(detectLang());
    var btn = document.getElementById("langBtn");
    if (btn) btn.addEventListener("click", toggleLang);
  });
})();

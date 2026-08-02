/* شريط تقدّم الخطوات — يشتغل مع assets/stepper.css.
   كل صفحة تحدد خطوتها الحالية بـ data-current-step على العنصر
   .sada-stepper (1 = الحساب، 2 = التفعيل، 3 = اسم المستخدم، 4 = تم). */
(function () {
  function render(el, current, opts) {
    opts = opts || {};

    var dots = Array.prototype.slice.call(el.querySelectorAll(".sada-dot"));
    dots.forEach(function (dot) {
      var n = parseInt(dot.getAttribute("data-step"), 10);
      var wasCurrent = dot.classList.contains("is-current");
      dot.classList.remove("is-complete", "is-current", "sada-dot-just-advanced");

      if (n < current) {
        dot.classList.add("is-complete");
      } else if (n === current) {
        dot.classList.add("is-current");
        // نميّز لحظة "تقدّم حي" (زي نجاح كود التفعيل وأنت واقف بالصفحة)
        // بنبضة بسيطة، مو بس ظهورها جاهزة عند فتح صفحة جديدة.
        if (opts.live && !wasCurrent) {
          void dot.offsetWidth; // إجبار reflow عشان الحركة تشتغل من الصفر
          dot.classList.add("sada-dot-just-advanced");
        }
      }
    });

    var labels = Array.prototype.slice.call(el.querySelectorAll(".sada-stepper-label"));
    labels.forEach(function (label) {
      var n = parseInt(label.getAttribute("data-step-label"), 10);
      label.classList.toggle("is-current", n === current);
    });
  }

  function init() {
    document.querySelectorAll(".sada-stepper[data-current-step]").forEach(function (el) {
      render(el, parseInt(el.getAttribute("data-current-step"), 10) || 1);
    });
  }

  // يُستخدم قبل التحويل لصفحة تالية — يقدّم الشريط خطوة وحدة بحركة أوضح
  // (مثلاً بعد نجاح التحقق من الكود، قبل الانتقال لصفحة اسم المستخدم)
  // عشان المستخدم يحس التقدّم بشكل واضح قبل حتى ما تتغيّر الصفحة.
  function advanceTo(step) {
    document.querySelectorAll(".sada-stepper[data-current-step]").forEach(function (el) {
      render(el, step, { live: true });
    });
  }

  window.SadaStepper = { render: render, advanceTo: advanceTo };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

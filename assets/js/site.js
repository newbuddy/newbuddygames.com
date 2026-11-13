(function () {
  // Mobile menu
  var header = document.querySelector(".site-header");
  var btn = document.querySelector(".menu-btn");
  if (header && btn) {
    var close = function () { header.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); };
    btn.addEventListener("click", function () {
      var open = header.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && header.classList.contains("open")) { close(); btn.focus(); } });
    header.querySelectorAll(".site-nav a").forEach(function (a) { a.addEventListener("click", close); });
    window.matchMedia("(min-width: 861px)").addEventListener("change", close);
  }

  // Reveal on scroll
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  } else {
    els.forEach(function (e) { e.classList.add("in"); });
  }

  // Copyright year
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = String(new Date().getFullYear()); });
})();

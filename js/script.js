// =====================================================
// Ram  Kundan Lal Mahajan NGO — Shared behaviour
// =====================================================

document.addEventListener("DOMContentLoaded", function () {
  /* ---------------- Mobile nav toggle ---------------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
    });
  }

  /* ---------------- Animated impact counters ---------------- */
  var counters = document.querySelectorAll(".counter[data-target]");
  if (counters.length) {
    var animateCounter = function (el) {
      var target = parseFloat(el.getAttribute("data-target"));
      var suffix = el.getAttribute("data-suffix") || "";
      var duration = 1600;
      var start = null;

      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        var value = Math.floor(eased * target);
        el.textContent = value.toLocaleString("en-IN") + suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target.toLocaleString("en-IN") + suffix;
        }
      }
      requestAnimationFrame(step);
    };

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach(function (c) { observer.observe(c); });
  }

  /* ---------------- Carousels ---------------- */
  document.querySelectorAll(".carousel").forEach(function (carousel) {
    var track = carousel.querySelector(".carousel-track");
    var slides = carousel.querySelectorAll(".carousel-slide");
    var prevBtn = carousel.querySelector(".carousel-prev");
    var nextBtn = carousel.querySelector(".carousel-next");
    var dotsWrap = carousel.querySelector(".carousel-dots");
    var index = 0;
    var autoplayMs = 5000; // was commented out, causing a ReferenceError in resetAutoplay()
    var timer = null;

    if (!track || slides.length === 0) return;

    if (dotsWrap) {
      dotsWrap.innerHTML = "";
      slides.forEach(function (_, i) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", "Go to slide " + (i + 1));
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", function () { goTo(i); });
        dotsWrap.appendChild(dot);
      });
    }

    function update() {
      track.style.transform = "translateX(-" + index * 100 + "%)";
      if (dotsWrap) {
        Array.prototype.forEach.call(dotsWrap.children, function (d, i) {
          d.classList.toggle("active", i === index);
        });
      }
    }

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      update();
      resetAutoplay();
    }

    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }

    function resetAutoplay() {
      if (timer) clearInterval(timer);
      timer = setInterval(next, autoplayMs);
    }

    if (nextBtn) nextBtn.addEventListener("click", next);
    if (prevBtn) prevBtn.addEventListener("click", prev);

    // swipe support
    var touchStartX = 0;
    track.addEventListener("touchstart", function (e) { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener("touchend", function (e) {
      var diff = e.changedTouches[0].clientX - touchStartX;
      if (diff > 40) prev();
      else if (diff < -40) next();
    }, { passive: true });

    update();
    resetAutoplay();
  });

  /* ---------------- New-style gallery carousels (.ngal-carousel) ---------------- */
  document.querySelectorAll(".ngal-carousel").forEach(function (carousel) {
    var slides = carousel.querySelectorAll(".ngal-slide");
    var prevBtn = carousel.querySelector(".ngal-prev");
    var nextBtn = carousel.querySelector(".ngal-next");
    var index = 0;
    var autoplayMs = 5000; // was commented out, causing a ReferenceError in resetAutoplay()
    var timer = null;

    if (!slides.length) return;

    // start from whichever slide already has .active, else 0
    slides.forEach(function (s, i) {
      if (s.classList.contains("active")) index = i;
    });

    function update() {
      slides.forEach(function (s, i) {
        s.classList.toggle("active", i === index);
      });
    }

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      update();
      resetAutoplay();
    }

    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }

    function resetAutoplay() {
      if (timer) clearInterval(timer);
      timer = setInterval(next, autoplayMs);
    }

    if (nextBtn) nextBtn.addEventListener("click", next);
    if (prevBtn) prevBtn.addEventListener("click", prev);

    // swipe support
    var touchStartX = 0;
    carousel.addEventListener("touchstart", function (e) { touchStartX = e.touches[0].clientX; }, { passive: true });
    carousel.addEventListener("touchend", function (e) {
      var diff = e.changedTouches[0].clientX - touchStartX;
      if (diff > 40) prev();
      else if (diff < -40) next();
    }, { passive: true });

    update();
    resetAutoplay();
  });

  /* ---------------- Gallery tabs ---------------- */
  var tabs = document.querySelectorAll(".gallery-tab");
  if (tabs.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var targetId = tab.getAttribute("data-target");
        document.querySelectorAll(".gallery-tab").forEach(function (t) { t.classList.remove("active"); });
        document.querySelectorAll(".gallery-panel").forEach(function (p) { p.classList.remove("active"); });
        tab.classList.add("active");
        var panel = document.getElementById(targetId);
        if (panel) panel.classList.add("active");
      });
    });
  }

  /* ---------------- Curriculum accordion ---------------- */
  document.querySelectorAll(".curriculum-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".curriculum-item");
      var wasOpen = item.classList.contains("open");
      item.parentElement.querySelectorAll(".curriculum-item").forEach(function (i) {
        i.classList.remove("open");
      });
      if (!wasOpen) item.classList.add("open");
    });
  });

  /* ---------------- Contact form (front-end only demo) ---------------- */
  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("input[name=name]").value.trim();
      var email = form.querySelector("input[name=email]").value.trim();
      var phone = form.querySelector("input[name=phone]").value.trim();
      var message = form.querySelector("textarea[name=message]").value.trim();
      var subject = encodeURIComponent("Website enquiry from " + (name || "visitor"));
      var body = encodeURIComponent(
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n\n" +
        "Message:\n" + message
      );
      var mailto = "mailto:rkmmftrust@gmail.com?subject=" + subject + "&body=" + body;
      window.location.href = mailto;
      var btn = form.querySelector("button[type=submit]");
      var original = btn.textContent;
      btn.textContent = "Opening mail app...";
      setTimeout(function () { btn.textContent = original; }, 3000);
    });
  }
});

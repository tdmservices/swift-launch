// ================= SECTION 12 =================

document.addEventListener("DOMContentLoaded", () => {

  // Plan Cards Animation
  const cards = document.querySelectorAll(".plan-card");

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => cardObserver.observe(card));

  // FAQ
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    if (question) {
      question.addEventListener("click", () => {

        faqItems.forEach(faq => {
          faq.classList.remove("active");
        });

        item.classList.add("active");
      });
    }
  });

  // ================= SECTION 13 =================

  const elements = document.querySelectorAll(
    ".contact-form, .contact-image, .subscribe"
  );

  const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => elementObserver.observe(el));

  // ================= NAVBAR =================

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // ================= LOGIN POPUP =================

  const authPopup = document.getElementById("authPopup");
  const openLogin = document.getElementById("openLogin");
  const closeAuthPopup = document.getElementById("closeAuthPopup");

  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  const showSignup = document.getElementById("showSignup");
  const showLogin = document.getElementById("showLogin");

  if (openLogin && authPopup) {
    openLogin.addEventListener("click", function (e) {
      e.preventDefault();
      authPopup.style.display = "flex";
    });
  }

  if (closeAuthPopup && authPopup) {
    closeAuthPopup.addEventListener("click", function () {
      authPopup.style.display = "none";
    });
  }

  if (authPopup) {
    authPopup.addEventListener("click", function (e) {
      if (e.target === authPopup) {
        authPopup.style.display = "none";
      }
    });
  }

  if (showSignup && loginForm && signupForm) {
    showSignup.addEventListener("click", function (e) {
      e.preventDefault();
      loginForm.style.display = "none";
      signupForm.style.display = "block";
    });
  }

  if (showLogin && loginForm && signupForm) {
    showLogin.addEventListener("click", function (e) {
      e.preventDefault();
      signupForm.style.display = "none";
      loginForm.style.display = "block";
    });
  }

  // ================= CONTACT POPUP =================

  document.addEventListener("click", function (e) {

    if (
      e.target.closest(".popup-trigger") ||
      e.target.closest(".button-ten") ||
      e.target.closest(".btn-primary") ||
      e.target.closest(".btn-secondary") ||
      e.target.closest(".primary-btn") ||
      e.target.closest(".arrow-btn") ||
      e.target.closest(".consult-btn") ||
      e.target.closest(".button-two")
    ) {

      e.preventDefault();

      const popupOverlay = document.getElementById("popupOverlay");

      if (popupOverlay) {
        popupOverlay.style.display = "flex";
      }
    }

    if (e.target.closest("#closePopup")) {
      const popupOverlay = document.getElementById("popupOverlay");

      if (popupOverlay) {
        popupOverlay.style.display = "none";
      }
    }

    const popupOverlay = document.getElementById("popupOverlay");

    if (popupOverlay && e.target === popupOverlay) {
      popupOverlay.style.display = "none";
    }
  });

});

// ================= GSAP =================

window.addEventListener("load", function () {

  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  mm.add("(min-width: 1880px)", function () {
    gsap.to(".info-card", {
      y: 180,
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-wrapper",
        start: "top top",
        end: "+=1500",
        scrub: true,
        pin: true
      }
    });
  });

  mm.add("(min-width: 1400px) and (max-width: 1879px)", function () {
    gsap.to(".info-card", {
      y: 480,
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-wrapper",
        start: "top top",
        end: "+=1300",
        scrub: true,
        pin: true
      }
    });
  });

  mm.add("(min-width: 1025px) and (max-width: 1399px)", function () {
    gsap.to(".info-card", {
      y: 80,
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-wrapper",
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true
      }
    });
  });

  mm.add("(max-width: 1024px)", function () {
    gsap.to(".info-card", {
      y: 50,
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-wrapper",
        start: "top top",
        end: "+=800",
        scrub: true,
        pin: true
      }
    });
  });

  ScrollTrigger.refresh();
});
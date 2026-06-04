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

});
  // ================= CONTACT POPUP =================

  const overlay = document.getElementById('popupOverlay');
  document.querySelectorAll('.primary-btn, .btn-secondary, .btn-primary, .trust-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      overlay.style.display = 'flex'; // ✅ Yeh add karo
      overlay.classList.add('active');
      formContainer.style.display = 'flex';
      successScreen.style.display = 'none';
      form.reset();
      onCanvasResize();
    });
  });
  const formContainer = document.getElementById('formContainer');
  const successScreen = document.getElementById('successScreen');
  const form = document.getElementById('consultationForm');
  const card = document.getElementById('interactiveCard');

  // Open function
  function openPopup() {
    if (!overlay) return;
    overlay.style.display = 'flex';
    overlay.classList.add('active');
    formContainer.style.display = 'flex';
    successScreen.style.display = 'none';
    form.reset();
    onCanvasResize();
  }

  // Close function
  function closePopup() {
    if (!overlay) return;
    overlay.classList.remove('active');
    overlay.style.display = 'none';
    card.style.transform = 'rotateX(10deg) rotateY(-5deg) translateZ(-50px)';
  }

  // ✅ openBtn optional check ke saath
  const openBtn = document.getElementById('openPopupBtn');
  if (openBtn) openBtn.addEventListener('click', openPopup);

  // ✅ Saare buttons
  document.querySelectorAll('.primary-btn, .btn-secondary, .btn-primary, .trust-btn').forEach(btn => {
    btn.addEventListener('click', openPopup);
  });

  // ✅ Close button
  if (closeBtn) closeBtn.addEventListener('click', closePopup);

  // ✅ Outside click
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closePopup();
    });
  }

  // Auto open - sirf home page par
  window.addEventListener('load', () => {
    initThreeEngine();
    animateThree();

    setTimeout(() => {
      if (overlay) {
        overlay.style.display = 'flex';
        overlay.classList.add('active');
        onCanvasResize();
      }
    }, 600);
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


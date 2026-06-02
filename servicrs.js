document.addEventListener("DOMContentLoaded", () => {

  // reusable function (clean code)
  const createObserver = (selector, options = { threshold: 0.2 }) => {
    const elements = document.querySelectorAll(selector);

    if (!elements.length) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, options);

    elements.forEach((el) => obs.observe(el));
  };

  // SECTION 5
  createObserver(".service-box, .section-title, .section-subtitle", {
    threshold: 0.2
  });

  // SECTION 13
  createObserver(".contact-form, .contact-image, .subscribe", {
    threshold: 0.2
  });

  // SECTION 6
  createObserver(".service-title, .service-card, .service-button", {
    threshold: 0.15
  });

  // SECTION 7
  createObserver(".features-title, .features-card, .features-button", {
    threshold: 0.15
  });

  // TRUST SECTION (IMPORTANT FIX)

  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".trust-section",
      start: "top top",
      end: "+=150%",
      scrub: true,
      pin: true,
    }
  });

  // 🔹 Step 1: card animation
  tl.to(".trust-card", {
    y: 120,
    opacity: 1,
    ease: "none",
  });

  // 🔹 Step 2: typing animation (AFTER step 1)
  tl.add(() => {
    const text = "What's Happening";
    const target = document.querySelector(".trust-title");

    let i = 0;
    target.innerHTML = ""; // reset

    function typeWriter() {
      if (i < text.length) {
        target.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
      }
    }

    typeWriter();
  });

  // INFO SECTION
  const infoSection = document.querySelector(".info-section");

  if (infoSection) {
    const infoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    }, {
      threshold: 0.3
    });

    infoObserver.observe(infoSection);
  }

  // STATS SECTION
  const statsSection = document.querySelector(".stats");

  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, {
      threshold: 0.3
    });

    statsObserver.observe(statsSection);
  }

  // TESTIMONIAL SECTION
  const testimonialSection = document.querySelector(".testimonial-slider");

  if (testimonialSection) {
    const testimonialObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    }, {
      threshold: 0.3
    });

    testimonialObserver.observe(testimonialSection);
  }

});

// NAVBAR NAVBAR NAVBAR NAVBAR NAVBAR

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");

  let currentPage = window.location.pathname;

  // fix Netlify root case
  if (currentPage === "/" || currentPage === "") {
    currentPage = "index.html";
  } else {
    currentPage = currentPage.split("/").pop();
  }

  links.forEach(link => {
    let linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
});

// NAVBAR NAVBAR NAVBAR NAVBAR NAVBAR

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(
  ".steps__header, .step-card, .steps__footer"
).forEach((el) => {
  observer.observe(el);
});


const authPopup = document.getElementById("authPopup");
const openLogin = document.getElementById("openLogin");
const closeAuthPopup = document.getElementById("closeAuthPopup");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

if (openLogin) {
  openLogin.addEventListener("click", function (e) {
    e.preventDefault();
    authPopup.style.display = "flex";
  });
}

if (closeAuthPopup) {
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

if (showSignup) {
  showSignup.addEventListener("click", function (e) {
    e.preventDefault();

    loginForm.style.display = "none";
    signupForm.style.display = "block";
  });
}

if (showLogin) {
  showLogin.addEventListener("click", function (e) {
    e.preventDefault();

    signupForm.style.display = "none";
    loginForm.style.display = "block";
  });
}


document.addEventListener("click", function (e) {

    if (
        e.target.closest(".popup-trigger") ||
        e.target.closest(".btn-primary") ||
        e.target.closest(".btn-secondary") ||
       e.target.closest(".trust-btn")
        
    ) {
        e.preventDefault();

        const popupOverlay = document.getElementById("popupOverlay");

        if (popupOverlay) {
            popupOverlay.style.display = "flex";
        }
    }

    // Close Popup
    if (e.target.closest("#closePopup")) {
        document.getElementById("popupOverlay").style.display = "none";
    }

    // Click Outside
    const popupOverlay = document.getElementById("popupOverlay");

    if (e.target === popupOverlay) {
        popupOverlay.style.display = "none";
    }
});
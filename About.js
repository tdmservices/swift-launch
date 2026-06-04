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

// SECTON 13 ANMATON SECTON 13 ANMATON SECTON 13 ANMATON

document.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll(
    ".contact-form, .contact-image, .subscribe"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));

});

// SLIDER SLIDER SLIDER SLIDER

window.addEventListener("load", function () {

  const track = document.querySelector(".report-track");
  const slides = document.querySelectorAll(".report-slide");

  let index = 0;
  const totalSlides = slides.length;

  function moveSlider() {
    index++;

    if (index >= totalSlides) {
      index = 0;
    }

    track.style.transform = `translateX(-${index * 100}%)`;
    track.style.transition = "transform 0.8s ease";
  }

  // auto play
  let sliderInterval = setInterval(moveSlider, 4000);

});

// ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION
// SECTION 4 SECTION 4 SECTION 4 SECTION 4 SECION 4

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }

  });
}, {
  threshold: 0.3
});

/* ELEMENTS */
const hiddenElements = document.querySelectorAll(".value-left, .value-right");

hiddenElements.forEach((el) => observer.observe(el));

// SECTION 7 SECTION 7 SECTION 7 SECTION 7 SECTION 7

const whyUsObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }

  });

}, {
  threshold: 0.3
});

/* TARGET ELEMENTS */
const whyUsElements = document.querySelectorAll(
  ".why-us-left, .why-us-right"
);

/* OBSERVE */
whyUsElements.forEach((el) => {
  whyUsObserver.observe(el);
});

// SECTION 6 SECTION 6 SECTION 6 SECTION 6 SECTION 6

window.addEventListener("load", function () {

  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  function historyAnimation(moveY, endValue) {

    gsap.to(".history-card", {
      y: moveY,
      ease: "none",

      scrollTrigger: {
        trigger: ".history-hero",
        start: "top top",
        end: endValue,
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    });

  }

  // Large
  mm.add("(min-width: 1880px)", function () {
    historyAnimation(260, "+=1600");
  });

  // Desktop
  mm.add("(min-width: 1400px) and (max-width: 1879px)", function () {
    historyAnimation(220, "+=1400");
  });

  // Laptop
  mm.add("(min-width: 1025px) and (max-width: 1399px)", function () {
    historyAnimation(180, "+=1200");
  });

  // Mobile
  mm.add("(max-width: 1024px)", function () {
    historyAnimation(120, "+=900");
  });

  ScrollTrigger.refresh();

});

window.addEventListener("load", function () {

  const buttons = document.querySelectorAll(".history-years button");

  const defaultBtn = buttons[0]; // 1950

  buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });

    btn.addEventListener("mouseleave", () => {

      // check if kisi aur button pe hover nahi hai
      let anyHover = false;

      buttons.forEach(b => {
        if (b.matches(":hover")) {
          anyHover = true;
        }
      });

      if (!anyHover) {
        buttons.forEach(b => b.classList.remove("active"));
        defaultBtn.classList.add("active");
      }

    });

  });

});


// NAVBAR NAVBAR NAVBAR NAVBAR NAVBAR

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


const overlay = document.getElementById('popupOverlay');
const openBtn = document.getElementById('openPopupBtn');
const closeBtn = document.getElementById('closePopupBtn');
const formContainer = document.getElementById('formContainer');
const successScreen = document.getElementById('successScreen');
const form = document.getElementById('consultationForm');

// Outer Slideshow Management
const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;

function startSlideshow() {
  setInterval(() => {
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.add('active');
  }, 6000); // Har 6 seconds baad image changes with zoom animation
}

// Action to Open Popup
openBtn.addEventListener('click', () => {
  // Hum active class add karenge jo smooth slide aur opacity animations trigger karegi
  overlay.classList.add('active');
  formContainer.style.display = 'flex';
  successScreen.style.display = 'none';
  form.reset();
});

// Action to Close Popup
closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});

// Close when clicking outside of the popup container card
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
  }
});

// Form Submission Logic
function handleFormSubmit(event) {
  event.preventDefault();

  const btn = form.querySelector('.submit');
  btn.innerHTML = 'Sending...';
  btn.style.opacity = '0.7';
  btn.style.pointerEvents = 'none';

  // Server transition simulation (1.2 seconds)
  setTimeout(() => {
    formContainer.style.display = 'none';
    successScreen.style.display = 'flex';

    // Auto close after showing thank you screen
    setTimeout(() => {
      overlay.classList.remove('active');
    }, 3500);
  }, 1200);
}

// Initialize slideshow and auto load on page ready
window.addEventListener('DOMContentLoaded', () => {
  startSlideshow();

  // Auto trigger overlay display
  setTimeout(() => {
    overlay.classList.add('active');
  }, 500);
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
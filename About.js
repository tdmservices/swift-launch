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



// Open & Close function controller
function toggleSlPopup(show) {
  const mask = document.getElementById('slPopupOverlayMask');
  if (show) {
    mask.classList.add('sl-mask-visible');
  } else {
    mask.classList.remove('sl-mask-visible');
  }
}

// File Selector stimulation handler
function triggerSlFileSelector() {
  document.getElementById('slFileSelectorElement').click();
}

// Display chosen filename in shield space
function handleSlFileSelection(e) {
  const file = e.target.files[0];
  const filenameLabel = document.getElementById('slAttachedFileName');
  if (file) {
    filenameLabel.textContent = `(${file.name})`;
  } else {
    filenameLabel.textContent = '';
  }
}

// Submit and build beautiful success view inside white shield card
function handleSlFormSubmit(e) {
  e.preventDefault();
  const formShield = document.getElementById('slFormShieldContainer');

  formShield.innerHTML = `
        <div class="sl-form-success-shield">
          <div class="sl-form-success-icon-badge">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="width: 38px; height: 38px;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 style="color: #1e3a8a; font-size: 28px; font-weight: 800; margin-bottom: 12px; letter-spacing: -0.5px;">THANKS!</h2>
          <p style="color: #64748b; font-size: 15px; line-height: 1.6; margin-bottom: 30px; font-weight: 500;">
            Your message has been received. Our team will contact you shortly.
          </p>
          <button onclick="location.reload()" class="sl-form-submit-action" style="max-width: 200px; margin: 0 auto;">
            Got It
          </button>
        </div>
      `;
}
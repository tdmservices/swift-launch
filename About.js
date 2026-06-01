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

const popupTriggers = document.querySelectorAll(".popup-trigger");
const buttonten = document.querySelectorAll(".button-ten");
const btnprimary = document.querySelectorAll(".btn-primary");
const closePopup = document.getElementById("closePopup");
const popupOverlay = document.getElementById("popupOverlay");

popupTriggers.forEach(trigger => {
  trigger.addEventListener("click", function (e) {
    e.preventDefault();
    popupOverlay.style.display = "flex";
  });
});

closePopup.addEventListener("click", function () {
  popupOverlay.style.display = "none";
});

popupOverlay.addEventListener("click", function (e) {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = "none";
  }
});
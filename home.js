const slidesContainer = document.getElementById('slidesContainer');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;
let autoInterval;


function updateSlider() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;


  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}


function goToSlide(index) {
  currentIndex = index;
  updateSlider();
  resetAutoPlay();
}


function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}


function resetAutoPlay() {
  clearInterval(autoInterval);
  startAutoPlay();
}


function startAutoPlay() {
  autoInterval = setInterval(() => {
    nextSlide();
  }, 5000);
}


dots.forEach((dot, index) => {
  dot.addEventListener('click', () => goToSlide(index));
});


const sliderWrapper = document.querySelector('.slider-wrapper');
sliderWrapper.addEventListener('mouseenter', () => {
  clearInterval(autoInterval);
});
sliderWrapper.addEventListener('mouseleave', () => {
  startAutoPlay();
});


startAutoPlay();


// SECTON 11 SECTON 11 SECTON 11 SECTON 11 SECTON 11

function updateCenterItem() {
  const slider = document.querySelector('.brand-slider');
  const items = document.querySelectorAll('.brand-item');

  if (!slider || !items.length) return;

  const sliderCenter = slider.getBoundingClientRect().left + slider.offsetWidth / 2;

  let closestItem = null;
  let closestDistance = Infinity;

  items.forEach(item => {
    const itemRect = item.getBoundingClientRect();
    const itemCenter = itemRect.left + itemRect.width / 2;
    const distance = Math.abs(sliderCenter - itemCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestItem = item;
    }
  });

  items.forEach(item => item.classList.remove('active-center'));

  if (closestItem) {
    closestItem.classList.add('active-center');
  }
}

// Continuously check which item is in center
setInterval(updateCenterItem, 50);

// ANIMATION ANIMATION ANIMATION ANIMATION ANIMATION

window.addEventListener("scroll", function () {
  let stats = document.querySelectorAll(".stat, .stat-left");

  stats.forEach((el, index) => {
    let top = el.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (top < screenHeight - 100) {
      setTimeout(() => {
        el.classList.add("active");
      }, index * 150);
    }
  });
});





// SECTON 5 ANMATON SECTON 5 ANMATON 

const elements = document.querySelectorAll(
  ".service-box, .section-title, .section-subtitle"
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

elements.forEach((el) => observer.observe(el));

// SECTON 6 ANMATON SECTON 6 ANMATON SECTON 6 ANMATON

document.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll(
    ".service-title, .service-card, .service-button"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach((el) => observer.observe(el));

});

// SECTON 9 ANMATON SECTON 9 ANMATON SECTON 9 ANMATON

document.addEventListener("DOMContentLoaded", () => {

  const heroCard = document.querySelectorAll(".hero-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  heroCard.forEach(card => observer.observe(card));

});

// SECTON 12 ANMATON SECTON 12 ANMATON SECTON 12 ANMATON

document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".plan-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => observer.observe(card));

});

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


// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
  // Select all cards
  const cards = document.querySelectorAll('.card-box, .card-proof');
  const section = document.querySelector('.cards-section');

  // Find default active card (center card with 'active' class)
  let defaultCard = document.querySelector('.card-box.active');

  // If no active card found, use first card as default
  if (!defaultCard && cards.length > 0) {
    defaultCard = cards[1]; // Center card index
  }

  // Function to set active card
  function setActive(card) {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  }

  // Add hover event to each card
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      setActive(card);
    });
  });

  // Reset to default when mouse leaves the section
  if (section && defaultCard) {
    section.addEventListener('mouseleave', () => {
      setActive(defaultCard);
    });
  }

  // Optional: Add click events for buttons
  const primaryBtn = document.querySelector('.btn-primary');
  const secondaryBtn = document.querySelector('.btn-secondary');

  if (primaryBtn) {
    primaryBtn.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('Book a call clicked');
      // Add your booking logic here
    });
  }

  if (secondaryBtn) {
    secondaryBtn.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('Learn more clicked');
      // Add your learn more logic here
    });
  }
});

// NAVBAR RESPONIVS NAVBAR RESPONSIVE NAVBAR RESPONSIVE

// Responsive Navigation Menu JavaScript
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Create overlay element
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  // Toggle menu function
  function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');

    // Prevent body scroll when menu is open
    if (navLinks.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // Event listeners
  hamburger.addEventListener('click', toggleMenu);

  // Close menu when clicking on overlay
  overlay.addEventListener('click', toggleMenu);

  // Close menu when clicking on a link
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', function () {
      if (navLinks.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  // Close menu on window resize (if switching back to desktop view)
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
      toggleMenu();
    }
  });
});

// NAVBAR NAVBAR NAVBAR NAVBAR NAVBAR

const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo img");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Logo transition smooth karne ke liye CSS add karo
logo.style.transition = "opacity 0.2s ease";

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    logo.style.opacity = 0;
    setTimeout(() => {
      logo.src = "/img/swift lauch logo black (1) 1.png"; // dark logo
      logo.style.opacity = 1;
    }, 0);
  } else {
    navbar.classList.remove("scrolled");
    logo.style.opacity = 0;
    setTimeout(() => {
      logo.src = "img/Group 1642.png"; // default logo
      logo.style.opacity = 1;
    }, 200);
  }
});


const popupTriggers = document.querySelectorAll(".popup-trigger");
const openPopup = document.querySelectorAll("#openPopup");
const buttonten = document.querySelectorAll(".button-ten");
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


const loginPopup = document.getElementById("loginPopup");
const openPopup = document.getElementById("openLoginPopup");
const closePopup = document.getElementById("closeLoginPopup");

openPopup.addEventListener("click", function (e) {
  e.preventDefault();
  loginPopup.classList.add("active");
});

closePopup.addEventListener("click", function () {
  loginPopup.classList.remove("active");
});

loginPopup.addEventListener("click", function (e) {
  if (e.target === loginPopup) {
    loginPopup.classList.remove("active");
  }
});
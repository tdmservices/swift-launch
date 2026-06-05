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


// =========================
// OLD POPUP
// =========================

const popupOverlay = document.getElementById("popupOverlay");
const closePopupBtn = document.getElementById("closePopup");

// Event Delegation
document.addEventListener("click", function(e){

  if (
    e.target.closest(".popup-trigger") ||
    e.target.closest(".button-ten")
  ) {
    e.preventDefault();

    if (popupOverlay) {
      popupOverlay.style.display = "flex";
    }
  }

});

if (closePopupBtn) {
  closePopupBtn.addEventListener("click", function () {
    popupOverlay.style.display = "none";
  });
}

if (popupOverlay) {
  popupOverlay.addEventListener("click", function (e) {
    if (e.target === popupOverlay) {
      popupOverlay.style.display = "none";
    }
  });
}


// =========================
// LOGIN / SIGNUP POPUP
// =========================

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

 // Toggle popup open & close handler
    function togglePopup(show) {
      const overlay = document.getElementById('popupOverlay');
      if (show) {
        overlay.classList.add('active');
      } else {
        overlay.classList.remove('active');
      }
    }

    // Custom simulated attachment button trigger
    function triggerFileSimulate() {
      document.getElementById('fileSelector').click();
    }

    // Display file name after attachment is uploaded
    function handleFileChange(event) {
      const file = event.target.files[0];
      const attachedText = document.getElementById('attachedFileName');
      if (file) {
        attachedText.textContent = `(${file.name})`;
      } else {
        attachedText.textContent = '';
      }
    }

    // Submit handler inside the white card
    function handleSend(e) {
      e.preventDefault();
      const whiteCard = document.getElementById('rightWhiteCard');
      
      // Beautiful layered success layout inside the white card container
      whiteCard.innerHTML = `
        <div class="success-card-content">
          <div class="success-badge-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="width: 38px; height: 38px;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 style="color: #1e3a8a; font-size: 28px; font-weight: 800; margin-bottom: 12px; letter-spacing: -0.5px;">Abhar!</h2>
          <p style="color: #64748b; font-size: 15px; line-height: 1.6; margin-bottom: 30px; font-weight: 500;">
            Tmaro sandesh amane mali gayo chhe. Amari team bahu jald tamaro sampark karse.
          </p>
          <button onclick="location.reload()" class="send-btn" style="max-width: 200px; margin: 0 auto;">
            Saru Chhe
          </button>
        </div>
      `;
    }
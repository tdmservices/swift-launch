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

const overlay = document.getElementById('popupOverlay');
const openBtn = document.getElementById('openPopupBtn');
const closeBtn = document.getElementById('closePopupBtn');
const formContainer = document.getElementById('formContainer');
const successScreen = document.getElementById('successScreen');
const form = document.getElementById('consultationForm');
const card = document.getElementById('interactiveCard');
const rocketContainer = document.getElementById('rocket-overlay-container');

// Check if device is mobile
let isMobileDevice = window.innerWidth <= 900;

window.addEventListener('resize', () => {
  isMobileDevice = window.innerWidth <= 900;
  if (isMobileDevice) {
    if (rocketContainer) rocketContainer.style.transform = 'translate(-50%, -50%) translateZ(0px)';
  }
});

// ==========================================
// 1. ACTIVE THREE.JS BACKGROUND PARTICLES
// ==========================================
let scene, camera, renderer, particleSystem, outerRing;
const leftPanel = document.getElementById('leftPanel');
const canvasContainer = document.getElementById('three-d-canvas');

// Mouse dynamic tracking variables
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;

function initThreeEngine() {
  // Three.js Scene initialize kiya
  scene = new THREE.Scene();

  // Camera angle aur position setup
  const width = leftPanel.clientWidth || 300;
  const height = leftPanel.clientHeight || 500;
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.z = 7.5;

  // Renderer setup premium rendering ke liye
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  canvasContainer.appendChild(renderer.domElement);

  // Light sources
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0x00d2ff, 3, 20);
  pointLight.position.set(2, 4, 6);
  scene.add(pointLight);

  // Background dynamic stars sphere
  const particleCount = 200;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  const sphereRadius = 2.4;
  for (let i = 0; i < particleCount; i++) {
    const phi = Math.acos(Math.random() * 2 - 1);
    const theta = Math.random() * Math.PI * 2;

    positions[i * 3] = sphereRadius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = sphereRadius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = sphereRadius * Math.cos(phi);
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // Custom glowing round procedural circular particle texture
  const canvasMaterial = document.createElement('canvas');
  canvasMaterial.width = 16;
  canvasMaterial.height = 16;
  const ctx = canvasMaterial.getContext('2d');
  const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.3, 'rgba(0,210,255,1)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 16, 16);

  const particleTexture = new THREE.CanvasTexture(canvasMaterial);

  const material = new THREE.PointsMaterial({
    size: 0.18,
    map: particleTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);

  // Outer diagonal orbit ring structure
  const ringGeometry = new THREE.RingGeometry(2.3, 2.315, 64);
  const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0x0052FF,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.25
  });
  outerRing = new THREE.Mesh(ringGeometry, ringMaterial);
  outerRing.rotation.x = Math.PI / 2.3;
  scene.add(outerRing);

  // Mouse movement controller (Left-side panel par movement track karne ke liye)
  leftPanel.addEventListener('mousemove', (e) => {
    const rect = leftPanel.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    targetX = x * 0.001;
    targetY = y * 0.001;
  });

  window.addEventListener('resize', onCanvasResize);
}

function onCanvasResize() {
  if (!camera || !renderer) return;
  const width = leftPanel.clientWidth;
  const height = leftPanel.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

let clock = new THREE.Clock();

function animateThree() {
  requestAnimationFrame(animateThree);

  if (!renderer || !scene || !camera) return;

  const time = clock.getElapsedTime();

  // Background elements rotation (stars/orbit ring)
  particleSystem.rotation.y = time * 0.04;
  particleSystem.rotation.x = time * 0.01;
  outerRing.rotation.z = -time * 0.03;

  // Inertia-based interactive mouse offsets calculations
  mouseX += (targetX - mouseX) * 0.05;
  mouseY += (targetY - mouseY) * 0.05;

  // ROCKET IMAGE HOVER & TILT PHYSICS: Isse exact 3D floating aura effect milta hai
  if (rocketContainer && !isMobileDevice) {
    const hoverY = Math.sin(time * 1.5) * 12; // Continuous smooth up-down flow
    const tiltX = -mouseY * 18; // Left/Right dynamic 3D angle
    const tiltY = mouseX * 18;  // Up/Down dynamic 3D angle

    // CSS matrix transform apply kiya high-fps execution ke liye
    rocketContainer.style.transform = `translate(-50%, calc(-50% + ${hoverY}px)) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(50px)`;
  }

  renderer.render(scene, camera);
}

// ==========================================
// 2. TRANSITION CONTROLS AND FORMS API SETUP
// ==========================================

// Open overlay
openBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
  setTimeout(() => {
    overlay.classList.add('active');
    formContainer.style.display = 'flex';
    successScreen.style.display = 'none';
    form.reset();
    onCanvasResize();
  }, 10);
});

// Close overlay
closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 500);
});

// Close click outside bounds
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 500);
  }
});

// Simulating sleek Form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const btn = form.querySelector('.submit');
  const originalHTML = btn.innerHTML;
  btn.innerHTML = 'Sending...';
  btn.style.opacity = '0.7';
  btn.style.pointerEvents = 'none';

  // Fake API response delay transition
  setTimeout(() => {
    formContainer.style.display = 'none';
    successScreen.style.display = 'flex';

    btn.innerHTML = originalHTML;
    btn.style.opacity = '1';
    btn.style.pointerEvents = 'auto';

    // Success message ke bad system safely slide-out hoga
    setTimeout(() => {
      overlay.classList.remove('active');
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 500);
    }, 3500);
  }, 1200);
}

// Page loads everything sequentially
window.addEventListener('load', () => {
  initThreeEngine();
  animateThree();

  // Settle elegant auto-popup opening
  setTimeout(() => {
    overlay.style.display = 'flex';
    setTimeout(() => {
      overlay.classList.add('active');
      onCanvasResize();
    }, 10);
  }, 600);
});
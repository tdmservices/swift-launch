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
  createObserver(".service-box, .section-title, .section-subtitle", { threshold: 0.2 });

  // SECTION 13
  createObserver(".contact-form, .contact-image, .subscribe", { threshold: 0.2 });

  // SECTION 6
  createObserver(".service-title, .service-card, .service-button", { threshold: 0.15 });

  // SECTION 7
  createObserver(".features-title, .features-card, .features-button", { threshold: 0.15 });

  // TRUST SECTION
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

  tl.to(".trust-card", {
    y: 120,
    opacity: 1,
    ease: "none",
  });

  tl.add(() => {
    const text = "What's Happening";
    const target = document.querySelector(".trust-title");
    let i = 0;
    target.innerHTML = "";

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
    }, { threshold: 0.3 });
    infoObserver.observe(infoSection);
  }

  // STATS SECTION
  const statsSection = document.querySelector(".stats");
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
  }

  // TESTIMONIAL SECTION
  const testimonialSection = document.querySelector(".testimonial-slider");
  if (testimonialSection) {
    const testimonialObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    }, { threshold: 0.3 });
    testimonialObserver.observe(testimonialSection);
  }

});

// ==========================================
// NAVBAR
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");
  let currentPage = window.location.pathname;

  if (currentPage === "/" || currentPage === "") {
    currentPage = "index.html";
  } else {
    currentPage = currentPage.split("/").pop();
  }

  links.forEach(link => {
    let linkPage = link.getAttribute("href");
    if (linkPage === currentPage) link.classList.add("active");
  });
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Steps observer
const stepsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.2 });

document.querySelectorAll(".steps__header, .step-card, .steps__footer").forEach((el) => {
  stepsObserver.observe(el);
});

// ==========================================
// POPUP 1 & 2 — authPopup
// ==========================================

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
    if (e.target === authPopup) authPopup.style.display = "none";
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

// ==========================================
// POPUP 3 — consultation popup (THREE.JS)
// ==========================================

(function () {

  const overlay = document.getElementById('popupOverlay');
  const openBtn = document.getElementById('openPopupBtn');
  const closeBtn = document.getElementById('closePopupBtn');
  const formContainer = document.getElementById('formContainer');
  const successScreen = document.getElementById('successScreen');
  const form = document.getElementById('consultationForm');
  const card = document.getElementById('interactiveCard');
  const rocketContainer = document.getElementById('rocket-overlay-container');
  const leftPanel = document.getElementById('leftPanel');
  const canvasContainer = document.getElementById('three-d-canvas');

  if (!overlay || !leftPanel || !canvasContainer) return;

  let isMobileDevice = window.innerWidth <= 900;

  window.addEventListener('resize', () => {
    isMobileDevice = window.innerWidth <= 900;
    if (isMobileDevice && rocketContainer) {
      rocketContainer.style.transform = 'translate(-50%, -50%) translateZ(0px)';
    }
  });

  // 3D Card tilt on mouse move
  document.addEventListener('mousemove', (e) => {
    if (isMobileDevice || !overlay.classList.contains('active') || !card) return;
    const halfWidth = window.innerWidth / 2;
    const halfHeight = window.innerHeight / 2;
    const mouseX = (e.clientX - halfWidth) / halfWidth;
    const mouseY = (e.clientY - halfHeight) / halfHeight;
    const rotateX = -mouseY * 12;
    const rotateY = mouseX * 12;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  });

  overlay.addEventListener('mouseleave', () => {
    if (isMobileDevice || !card) return;
    card.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
  });

  // THREE.JS SETUP
  let scene, camera, renderer, particleSystem, outerRing;
  let mouseX3D = 0, mouseY3D = 0;
  let targetX3D = 0, targetY3D = 0;

  function initThreeEngine() {
    scene = new THREE.Scene();

    const width = leftPanel.clientWidth || 300;
    const height = leftPanel.clientHeight || 500;
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7.5;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasContainer.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00d2ff, 3, 20);
    pointLight.position.set(2, 4, 6);
    scene.add(pointLight);

    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const sphereRadius = 2.4;

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(Math.random() * 2 - 1);
      const theta = Math.random() * Math.PI * 2;
      positions[i * 3]     = sphereRadius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = sphereRadius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = sphereRadius * Math.cos(phi);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const canvasMat = document.createElement('canvas');
    canvasMat.width = 16; canvasMat.height = 16;
    const ctx = canvasMat.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.3, 'rgba(0,210,255,1)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 16);

    const particleTexture = new THREE.CanvasTexture(canvasMat);
    const material = new THREE.PointsMaterial({
      size: 0.18,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

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

    leftPanel.addEventListener('mousemove', (e) => {
      const rect = leftPanel.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetX3D = x * 0.001;
      targetY3D = y * 0.001;
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

  const clock = new THREE.Clock();

  function animateThree() {
    requestAnimationFrame(animateThree);
    if (!renderer || !scene || !camera) return;

    const time = clock.getElapsedTime();

    particleSystem.rotation.y = time * 0.04;
    particleSystem.rotation.x = time * 0.01;
    outerRing.rotation.z = -time * 0.03;

    mouseX3D += (targetX3D - mouseX3D) * 0.05;
    mouseY3D += (targetY3D - mouseY3D) * 0.05;

    if (rocketContainer && !isMobileDevice) {
      const hoverY = Math.sin(time * 1.5) * 12;
      const tiltX = -mouseY3D * 18;
      const tiltY = mouseX3D * 18;
      rocketContainer.style.transform = `translate(-50%, calc(-50% + ${hoverY}px)) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(50px)`;
    }

    renderer.render(scene, camera);
  }

  // Open/Close helpers
  function openOverlay() {
    overlay.style.display = 'flex';
    setTimeout(() => {
      overlay.classList.add('active');
      if (formContainer) formContainer.style.display = 'flex';
      if (successScreen) successScreen.style.display = 'none';
      if (form) form.reset();
      onCanvasResize();
    }, 10);
  }

  function closeOverlay() {
    overlay.classList.remove('active');
    setTimeout(() => { overlay.style.display = 'none'; }, 500);
    if (card) card.style.transform = 'rotateX(10deg) rotateY(-5deg) translateZ(-50px)';
  }

  // All buttons that open this popup
  if (openBtn) openBtn.addEventListener('click', openOverlay);

  document.querySelectorAll('.primary-btn, .btn-secondary, .btn-primary, .trust-btn').forEach(btn => {
    btn.addEventListener('click', openOverlay);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeOverlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeOverlay();
  });

  // Form submit
  window.handleFormSubmit = function (event) {
    event.preventDefault();
    const btn = form.querySelector('.submit');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = 'Sending...';
    btn.style.opacity = '0.7';
    btn.style.pointerEvents = 'none';

    setTimeout(() => {
      if (formContainer) formContainer.style.display = 'none';
      if (successScreen) successScreen.style.display = 'flex';
      btn.innerHTML = originalHTML;
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';

      setTimeout(() => closeOverlay(), 3500);
    }, 1200);
  };

  // Init on load
  window.addEventListener('load', () => {
    initThreeEngine();
    animateThree();

    // Auto open on page load
    setTimeout(() => openOverlay(), 600);
  });

})(); // End of IIFE — popup 3 scope


// ==========================================
// SL POPUP (toggleSlPopup helper functions)
// ==========================================

function toggleSlPopup(show) {
  const mask = document.getElementById('slPopupOverlayMask');
  if (!mask) return;
  if (show) {
    mask.classList.add('sl-mask-visible');
  } else {
    mask.classList.remove('sl-mask-visible');
  }
}

function triggerSlFileSelector() {
  const el = document.getElementById('slFileSelectorElement');
  if (el) el.click();
}

function handleSlFileSelection(e) {
  const file = e.target.files[0];
  const filenameLabel = document.getElementById('slAttachedFileName');
  if (!filenameLabel) return;
  filenameLabel.textContent = file ? `(${file.name})` : '';
}

function handleSlFormSubmit(e) {
  e.preventDefault();
  const formShield = document.getElementById('slFormShieldContainer');
  if (!formShield) return;

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

// Generic attachment helpers (for other popups if needed)
function triggerFileSimulate() {
  const el = document.getElementById('fileSelector');
  if (el) el.click();
}

function handleFileChange(event) {
  const file = event.target.files[0];
  const attachedText = document.getElementById('attachedFileName');
  if (!attachedText) return;
  attachedText.textContent = file ? `(${file.name})` : '';
}

function handleSend(e) {
  e.preventDefault();
  const whiteCard = document.getElementById('rightWhiteCard');
  if (!whiteCard) return;

  whiteCard.innerHTML = `
    <div class="success-card-content">
      <div class="success-badge-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="width: 38px; height: 38px;">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      <h2 style="color: #1e3a8a; font-size: 28px; font-weight: 800; margin-bottom: 12px; letter-spacing: -0.5px;">THANKS!</h2>
      <p style="color: #64748b; font-size: 15px; line-height: 1.6; margin-bottom: 30px; font-weight: 500;">
        Your message has been received. Our team will contact you shortly
      </p>
      <button onclick="location.reload()" class="send-btn" style="max-width: 200px; margin: 0 auto;">
        Got It
      </button>
    </div>
  `;
}
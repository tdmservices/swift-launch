
Claude finished the response

// STATS SECTION const statsSection = document.querySelector(".stats"); if (statsSection) { const statsObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("show"); } }); }, {

pasted

fix karo is code ko

3: 33 PM
Yeh code dekh ke main ne kuch major issues identify kiye hain.Fix karta hoon:

Problems found:

const openBtn, closeBtn, formContainer, successScreen, form, card, isMobileDevice, scene, camera, renderer, particleSystem, outerRing, leftPanel, canvasContainer, mouseX/Y, targetX/Y, clock — sab duplicate declarations hain
initThreeEngine() aur animateThree() do baar define hain
handleFormSubmit do baar define hai
window.addEventListener('load', ...) teen baar call ho raha hai — conflicts create ho rahe hain
openBtn const declare hone ke baad phir se const openBtn — syntax error

Viewed a file, created a file, read a file
Viewed a file, created a file, read a file
Yeh sab fixes ki gayi hain:

Duplicate Declarations(biggest issue)

const openBtn, closeBtn, formContainer, successScreen, form, card, isMobileDevice, scene, camera, renderer, particleSystem, outerRing, leftPanel, canvasContainer, mouseX/Y, targetX/Y, clock — sab remove karke sirf ek jagah rakhe
initThreeEngine(), animateThree(), handleFormSubmit() — sab duplicate definitions hata di gayi hain
Multiple window.addEventListener('load', ...) — ek mein merge kiye
Structure Fixes

Consultation popup ka sara code ek IIFE(function () { ... })() mein wrap kiya — taake variables global scope ko pollute na karen
Auth popup bhi apne IIFE mein isolate kiya
handleFormSubmit ko window.handleFormSubmit banaya taake HTML onsubmit attribute se accessible rahe
Safety Guards

Har element ke liye if (!element) return check lagaya — agar element page par na ho toh error nahi aayega
GSAP aur THREE.js ke liye bhi existence check lagaya

Script
JS 






Claude is AI and can make mistakes.Please double - check responses.
  Script · JS
// ============================================================
// STATS SECTION ANIMATION
// ============================================================
const statsSection = document.querySelector(".stats");

if (statsSection) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.3 });

  statsObserver.observe(statsSection);
}

// ============================================================
// SECTION 13 – CONTACT / SUBSCRIBE ANIMATION
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".contact-form, .contact-image, .subscribe");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});

// ============================================================
// SLIDER
// ============================================================
window.addEventListener("load", function () {
  const track = document.querySelector(".report-track");
  const slides = document.querySelectorAll(".report-slide");
  if (!track || !slides.length) return;

  let index = 0;
  const totalSlides = slides.length;

  function moveSlider() {
    index = (index + 1) % totalSlides;
    track.style.transform = `translateX(-${index * 100}%)`;
    track.style.transition = "transform 0.8s ease";
  }

  setInterval(moveSlider, 4000);
});

// ============================================================
// SECTION 4 – VALUE LEFT / RIGHT ANIMATION
// ============================================================
const valueObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll(".value-left, .value-right").forEach((el) => valueObserver.observe(el));

// ============================================================
// SECTION 7 – WHY US ANIMATION
// ============================================================
const whyUsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll(".why-us-left, .why-us-right").forEach((el) => whyUsObserver.observe(el));

// ============================================================
// SECTION 6 – HISTORY GSAP SCROLL ANIMATION
// ============================================================
window.addEventListener("load", function () {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();

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

  mm.add("(min-width: 1880px)", () => historyAnimation(260, "+=1600"));
  mm.add("(min-width: 1400px) and (max-width: 1879px)", () => historyAnimation(220, "+=1400"));
  mm.add("(min-width: 1025px) and (max-width: 1399px)", () => historyAnimation(180, "+=1200"));
  mm.add("(max-width: 1024px)", () => historyAnimation(120, "+=900"));

  ScrollTrigger.refresh();
});

// ============================================================
// SECTION 6 – HISTORY YEAR BUTTONS HOVER
// ============================================================
window.addEventListener("load", function () {
  const buttons = document.querySelectorAll(".history-years button");
  if (!buttons.length) return;

  const defaultBtn = buttons[0];

  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });

    btn.addEventListener("mouseleave", () => {
      const anyHover = Array.from(buttons).some(b => b.matches(":hover"));
      if (!anyHover) {
        buttons.forEach(b => b.classList.remove("active"));
        defaultBtn.classList.add("active");
      }
    });
  });
});

// ============================================================
// NAVBAR – MOBILE MENU TOGGLE
// ============================================================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ============================================================
// CONSULTATION POPUP (Three.js + Form)
// ============================================================
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

  if (!overlay) return; // Popup HTML page par nahi hai toh skip

  // ----------------------------------------------------------
  // Mobile detection
  // ----------------------------------------------------------
  let isMobileDevice = window.innerWidth <= 900;

  window.addEventListener('resize', () => {
    isMobileDevice = window.innerWidth <= 900;
    if (isMobileDevice && rocketContainer) {
      rocketContainer.style.transform = 'translate(-50%, -50%) translateZ(0px)';
    }
    if (isMobileDevice && card) {
      card.style.transform = 'none';
    }
  });

  // ----------------------------------------------------------
  // 3D CARD TILT ON MOUSE MOVE
  // ----------------------------------------------------------
  document.addEventListener('mousemove', (e) => {
    if (!card) return;
    if (isMobileDevice || !overlay.classList.contains('active')) return;

    const halfWidth = window.innerWidth / 2;
    const halfHeight = window.innerHeight / 2;
    const mx = (e.clientX - halfWidth) / halfWidth;
    const my = (e.clientY - halfHeight) / halfHeight;

    card.style.transform = `rotateX(${-my * 12}deg) rotateY(${mx * 12}deg) translateZ(0)`;
  });

  if (overlay && card) {
    overlay.addEventListener('mouseleave', () => {
      if (!isMobileDevice) card.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
    });
  }

  // ----------------------------------------------------------
  // THREE.JS GLOBE ENGINE
  // ----------------------------------------------------------
  let scene, camera, renderer, particleSystem, outerRing;
  let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
  let clock;

  function initThreeEngine() {
    if (!leftPanel || !canvasContainer || typeof THREE === "undefined") return;

    scene = new THREE.Scene();

    const width = leftPanel.clientWidth || 300;
    const height = leftPanel.clientHeight || 500;

    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasContainer.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const pointLight = new THREE.PointLight(0x00d2ff, 2, 20);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Particle sphere
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const sphereRadius = 1.8;

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(Math.random() * 2 - 1);
      const theta = Math.random() * Math.PI * 2;
      positions[i * 3] = sphereRadius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = sphereRadius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = sphereRadius * Math.cos(phi);
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Procedural glowing particle texture
    const cvs = document.createElement('canvas');
    cvs.width = cvs.height = 16;
    const ctx = cvs.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.3, 'rgba(0,210,255,1)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 16);

    const material = new THREE.PointsMaterial({
      size: 0.18,
      map: new THREE.CanvasTexture(cvs),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Orbit ring
    outerRing = new THREE.Mesh(
      new THREE.RingGeometry(2.4, 2.42, 64),
      new THREE.MeshBasicMaterial({ color: 0x0052FF, side: THREE.DoubleSide, transparent: true, opacity: 0.25 })
    );
    outerRing.rotation.x = Math.PI / 2.5;
    scene.add(outerRing);

    // Mouse tracking inside left panel
    leftPanel.addEventListener('mousemove', (e) => {
      const rect = leftPanel.getBoundingClientRect();
      targetX = (e.clientX - rect.left - rect.width / 2) * 0.0015;
      targetY = (e.clientY - rect.top - rect.height / 2) * 0.0015;
    });

    clock = new THREE.Clock();
    window.addEventListener('resize', onCanvasResize);
  }

  function onCanvasResize() {
    if (!camera || !renderer || !leftPanel) return;
    const width = leftPanel.clientWidth;
    const height = leftPanel.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  function animateThree() {
    requestAnimationFrame(animateThree);
    if (!renderer || !scene || !camera || !clock) return;

    const time = clock.getElapsedTime();

    particleSystem.rotation.y = time * 0.12;
    particleSystem.rotation.x = time * 0.05;
    outerRing.rotation.z = -time * 0.15;

    mouseX += (targetX - mouseX) * 0.05;
    mouseY += (targetY - mouseY) * 0.05;

    particleSystem.rotation.y += mouseX;
    particleSystem.rotation.x += mouseY;
    outerRing.rotation.y = mouseX * 1.5;

    // Rocket hover effect (desktop only)
    if (rocketContainer && !isMobileDevice) {
      const hoverY = Math.sin(time * 1.5) * 12;
      const tiltX = -mouseY * 18;
      const tiltY = mouseX * 18;
      rocketContainer.style.transform =
        `translate(-50%, calc(-50% + ${hoverY}px)) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(50px)`;
    }

    renderer.render(scene, camera);
  }

  // ----------------------------------------------------------
  // OPEN / CLOSE HELPERS
  // ----------------------------------------------------------
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
    if (card) card.style.transform = 'rotateX(10deg) rotateY(-5deg) translateZ(-50px)';
    setTimeout(() => { overlay.style.display = 'none'; }, 500);
  }

  // ----------------------------------------------------------
  // EVENT LISTENERS
  // ----------------------------------------------------------
  if (openBtn) openBtn.addEventListener('click', openOverlay);

  document.querySelectorAll('.primary-btn, .btn-secondary, .btn-primary').forEach(btn => {
    btn.addEventListener('click', openOverlay);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeOverlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeOverlay();
  });

  // ----------------------------------------------------------
  // FORM SUBMIT
  // ----------------------------------------------------------
  window.handleFormSubmit = function (event) {
    event.preventDefault();
    if (!form) return;

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

      setTimeout(closeOverlay, 3500);
    }, 1200);
  };

  // ----------------------------------------------------------
  // INIT ON LOAD
  // ----------------------------------------------------------
  window.addEventListener('load', () => {
    initThreeEngine();
    animateThree();

    // Auto-open popup with slight delay
    setTimeout(openOverlay, 600);
  });
})();

// ============================================================
// AUTH POPUP (Login / Signup)
// ============================================================
(function () {
  const authPopup = document.getElementById("authPopup");
  const openLogin = document.getElementById("openLogin");
  const closeAuthPopup = document.getElementById("closeAuthPopup");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const showSignup = document.getElementById("showSignup");
  const showLogin = document.getElementById("showLogin");

  if (!authPopup) return;

  if (openLogin) {
    openLogin.addEventListener("click", (e) => {
      e.preventDefault();
      authPopup.style.display = "flex";
    });
  }

  if (closeAuthPopup) {
    closeAuthPopup.addEventListener("click", () => {
      authPopup.style.display = "none";
    });
  }

  authPopup.addEventListener("click", (e) => {
    if (e.target === authPopup) authPopup.style.display = "none";
  });

  if (showSignup) {
    showSignup.addEventListener("click", (e) => {
      e.preventDefault();
      if (loginForm) loginForm.style.display = "none";
      if (signupForm) signupForm.style.display = "block";
    });
  }

  if (showLogin) {
    showLogin.addEventListener("click", (e) => {
      e.preventDefault();
      if (signupForm) signupForm.style.display = "none";
      if (loginForm) loginForm.style.display = "block";
    });
  }
})();

// ============================================================
// SL (SERVICE LETTER) POPUP
// ============================================================
function toggleSlPopup(show) {
  const mask = document.getElementById('slPopupOverlayMask');
  if (!mask) return;
  mask.classList.toggle('sl-mask-visible', show);
}

function triggerSlFileSelector() {
  const input = document.getElementById('slFileSelectorElement');
  if (input) input.click();
}

function handleSlFileSelection(e) {
  const file = e.target.files[0];
  const label = document.getElementById('slAttachedFileName');
  if (label) label.textContent = file ? `(${file.name})` : '';
}

function handleSlFormSubmit(e) {
  e.preventDefault();
  const formShield = document.getElementById('slFormShieldContainer');
  if (!formShield) return;

  formShield.innerHTML = `
    <div class="sl-form-success-shield">
      <div class="sl-form-success-icon-badge">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="width:38px;height:38px;">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
        </svg>
      </div>
      <h2 style="color:#1e3a8a;font-size:28px;font-weight:800;margin-bottom:12px;letter-spacing:-0.5px;">THANKS!</h2>
      <p style="color:#64748b;font-size:15px;line-height:1.6;margin-bottom:30px;font-weight:500;">
        Your message has been received. Our team will contact you shortly.
      </p>
      <button onclick="location.reload()" class="sl-form-submit-action" style="max-width:200px;margin:0 auto;">
        Got It
      </button>
    </div>
  `;
}


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
 
// SECTON 13 ANMATON
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
 
// SLIDER
window.addEventListener("load", function () {
  const track = document.querySelector(".report-track");
  const slides = document.querySelectorAll(".report-slide");
 
  if (!track || slides.length === 0) return;
 
  let index = 0;
  const totalSlides = slides.length;
 
  function moveSlider() {
    index++;
    if (index >= totalSlides) index = 0;
    track.style.transform = `translateX(-${index * 100}%)`;
    track.style.transition = "transform 0.8s ease";
  }
 
  setInterval(moveSlider, 4000);
});
 
// SECTION 4 ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, { threshold: 0.3 });
 
const hiddenElements = document.querySelectorAll(".value-left, .value-right");
hiddenElements.forEach((el) => observer.observe(el));
 
// SECTION 7 ANIMATION
const whyUsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, { threshold: 0.3 });
 
const whyUsElements = document.querySelectorAll(".why-us-left, .why-us-right");
whyUsElements.forEach((el) => whyUsObserver.observe(el));
 
// SECTION 6 - GSAP HISTORY
window.addEventListener("load", function () {
  if (typeof gsap === 'undefined') return;
 
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
 
  mm.add("(min-width: 1880px)", function () { historyAnimation(260, "+=1600"); });
  mm.add("(min-width: 1400px) and (max-width: 1879px)", function () { historyAnimation(220, "+=1400"); });
  mm.add("(min-width: 1025px) and (max-width: 1399px)", function () { historyAnimation(180, "+=1200"); });
  mm.add("(max-width: 1024px)", function () { historyAnimation(120, "+=900"); });
 
  ScrollTrigger.refresh();
});
 
// HISTORY YEARS HOVER
window.addEventListener("load", function () {
  const buttons = document.querySelectorAll(".history-years button");
  if (buttons.length === 0) return;
 
  const defaultBtn = buttons[0];
 
  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
 
    btn.addEventListener("mouseleave", () => {
      let anyHover = false;
      buttons.forEach(b => { if (b.matches(":hover")) anyHover = true; });
      if (!anyHover) {
        buttons.forEach(b => b.classList.remove("active"));
        defaultBtn.classList.add("active");
      }
    });
  });
});
 
// NAVBAR
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
 
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
 
// ==========================================
// THREE.JS POPUP - SIRF HOME PAGE PE
// ==========================================
const openBtn = document.getElementById('openPopupBtn');
const closeBtn = document.getElementById('closePopupBtn');
const formContainer = document.getElementById('formContainer');
const successScreen = document.getElementById('successScreen');
const form = document.getElementById('consultationForm');
const card = document.getElementById('interactiveCard');
const leftPanel = document.getElementById('leftPanel');
const canvasContainer = document.getElementById('three-d-canvas');
const mainOverlay = document.getElementById('popupOverlay');
 
// Sirf tab chalao jab yeh elements page pe maujood hon (Home page)
if (openBtn && closeBtn && formContainer && form && card && leftPanel && canvasContainer && mainOverlay) {
 
  let isMobileDevice = window.innerWidth <= 900;
 
  window.addEventListener('resize', () => {
    isMobileDevice = window.innerWidth <= 900;
    if (isMobileDevice) card.style.transform = 'none';
  });
 
  document.addEventListener('mousemove', (e) => {
    if (isMobileDevice || !mainOverlay.classList.contains('active')) return;
    const halfWidth = window.innerWidth / 2;
    const halfHeight = window.innerHeight / 2;
    const mouseX = (e.clientX - halfWidth) / halfWidth;
    const mouseY = (e.clientY - halfHeight) / halfHeight;
    card.style.transform = `rotateX(${-mouseY * 12}deg) rotateY(${mouseX * 12}deg) translateZ(0)`;
  });
 
  mainOverlay.addEventListener('mouseleave', () => {
    if (isMobileDevice) return;
    card.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
  });
 
  // THREE.JS ENGINE
  let scene, camera, renderer, particleSystem, outerRing;
  let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
 
  function initThreeEngine() {
    scene = new THREE.Scene();
    const width = leftPanel.clientWidth;
    const height = leftPanel.clientHeight;
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;
 
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasContainer.appendChild(renderer.domElement);
 
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x00d2ff, 2, 20);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);
 
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
 
    const canvasMat = document.createElement('canvas');
    canvasMat.width = 16; canvasMat.height = 16;
    const ctx = canvasMat.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.3, 'rgba(0,210,255,1)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 16);
 
    const material = new THREE.PointsMaterial({
      size: 0.18,
      map: new THREE.CanvasTexture(canvasMat),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
 
    particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);
 
    const ringGeometry = new THREE.RingGeometry(2.4, 2.42, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x0052FF, side: THREE.DoubleSide, transparent: true, opacity: 0.25
    });
    outerRing = new THREE.Mesh(ringGeometry, ringMaterial);
    outerRing.rotation.x = Math.PI / 2.5;
    scene.add(outerRing);
 
    leftPanel.addEventListener('mousemove', (e) => {
      const rect = leftPanel.getBoundingClientRect();
      targetX = (e.clientX - rect.left - rect.width / 2) * 0.0015;
      targetY = (e.clientY - rect.top - rect.height / 2) * 0.0015;
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
    particleSystem.rotation.y = time * 0.12;
    particleSystem.rotation.x = time * 0.05;
    outerRing.rotation.z = -time * 0.15;
    mouseX += (targetX - mouseX) * 0.05;
    mouseY += (targetY - mouseY) * 0.05;
    particleSystem.rotation.y += mouseX;
    particleSystem.rotation.x += mouseY;
    outerRing.rotation.y = mouseX * 1.5;
    renderer.render(scene, camera);
  }
 
  openBtn.addEventListener('click', () => {
    mainOverlay.style.display = 'flex';
    mainOverlay.classList.add('active');
    formContainer.style.display = 'flex';
    if (successScreen) successScreen.style.display = 'none';
    form.reset();
    onCanvasResize();
  });
 
  closeBtn.addEventListener('click', () => {
    mainOverlay.classList.remove('active');
    mainOverlay.style.display = 'none';
    card.style.transform = 'rotateX(10deg) rotateY(-5deg) translateZ(-50px)';
  });
 
  mainOverlay.addEventListener('click', (e) => {
    if (e.target === mainOverlay) {
      mainOverlay.classList.remove('active');
      mainOverlay.style.display = 'none';
      card.style.transform = 'rotateX(10deg) rotateY(-5deg) translateZ(-50px)';
    }
  });
 
  function handleFormSubmit(event) {
    event.preventDefault();
    const btn = form.querySelector('.submit');
    btn.innerHTML = 'Sending...';
    btn.style.opacity = '0.7';
    btn.style.pointerEvents = 'none';
    setTimeout(() => {
      formContainer.style.display = 'none';
      if (successScreen) successScreen.style.display = 'flex';
      setTimeout(() => {
        mainOverlay.classList.remove('active');
        card.style.transform = 'rotateX(10deg) rotateY(-5deg) translateZ(-50px)';
      }, 3500);
    }, 1200);
  }
 
  window.addEventListener('load', () => {
    if (typeof THREE !== 'undefined') {
      initThreeEngine();
      animateThree();
    }
    setTimeout(() => {
      mainOverlay.classList.add('active');
      onCanvasResize();
    }, 600);
  });
}
 
// ==========================================
// AUTH POPUP
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
// SIMPLE POPUP (ABOUT + ALL PAGES)
// ==========================================
 
// Toggle popup open & close
function togglePopup(show) {
  const overlay = document.getElementById('popupOverlay');
  if (!overlay) return;
  if (show) {
    overlay.classList.add('active');
  } else {
    overlay.classList.remove('active');
  }
}
 
// File selector trigger
function triggerFileSimulate() {
  const fileInput = document.getElementById('fileSelector');
  if (fileInput) fileInput.click();
}
 
// Show selected file name
function handleFileChange(event) {
  const file = event.target.files[0];
  const attachedText = document.getElementById('attachedFileName');
  if (!attachedText) return;
  attachedText.textContent = file ? `(${file.name})` : '';
}
 
// Form submit handler
function handleSend(e) {
  e.preventDefault();
  const whiteCard = document.getElementById('rightWhiteCard');
  if (!whiteCard) return;
 
  whiteCard.innerHTML = `
    <div class="success-card-content">
      <div class="success-badge-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="width:38px;height:38px;">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
        </svg>
      </div>
      <h2 style="color:#1e3a8a;font-size:28px;font-weight:800;margin-bottom:12px;">THANKS!</h2>
      <p style="color:#64748b;font-size:15px;line-height:1.6;margin-bottom:30px;">
        Your message has been received. Our team will contact you shortly.
      </p>
      <button type="button" class="send-btn" onclick="togglePopup(false)">Got It</button>
    </div>
  `;
}
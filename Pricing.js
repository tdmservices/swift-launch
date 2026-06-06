// ================= SECTION 12 =================

document.addEventListener("DOMContentLoaded", () => {

  // Plan Cards Animation
  const cards = document.querySelectorAll(".plan-card");

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => cardObserver.observe(card));

  // FAQ
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    if (question) {
      question.addEventListener("click", () => {

        faqItems.forEach(faq => {
          faq.classList.remove("active");
        });

        item.classList.add("active");
      });
    }
  });

  // ================= SECTION 13 =================

  const elements = document.querySelectorAll(
    ".contact-form, .contact-image, .subscribe"
  );

  const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => elementObserver.observe(el));

  // ================= NAVBAR =================

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // ================= LOGIN POPUP =================

  const authPopup = document.getElementById("authPopup");
  const openLogin = document.getElementById("openLogin");
  const closeAuthPopup = document.getElementById("closeAuthPopup");

  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  const showSignup = document.getElementById("showSignup");
  const showLogin = document.getElementById("showLogin");

  if (openLogin && authPopup) {
    openLogin.addEventListener("click", function (e) {
      e.preventDefault();
      authPopup.style.display = "flex";
    });
  }

  if (closeAuthPopup && authPopup) {
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

  if (showSignup && loginForm && signupForm) {
    showSignup.addEventListener("click", function (e) {
      e.preventDefault();
      loginForm.style.display = "none";
      signupForm.style.display = "block";
    });
  }

  if (showLogin && loginForm && signupForm) {
    showLogin.addEventListener("click", function (e) {
      e.preventDefault();
      signupForm.style.display = "none";
      loginForm.style.display = "block";
    });
  }

  // ================= CONTACT POPUP =================

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
    if (isMobileDevice && rocketContainer) {
      rocketContainer.style.transform = 'translate(-50%, -50%) translateZ(0px)';
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
    if (!leftPanel || !canvasContainer) return;
    
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
    if (leftPanel) {
      leftPanel.addEventListener('mousemove', (e) => {
        const rect = leftPanel.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        targetX = x * 0.001;
        targetY = y * 0.001;
      });
    }

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

  let clock = new THREE.Clock();

  function animateThree() {
    requestAnimationFrame(animateThree);

    if (!renderer || !scene || !camera) return;

    const time = clock.getElapsedTime();

    // Background elements rotation (stars/orbit ring)
    if (particleSystem) {
      particleSystem.rotation.y = time * 0.04;
      particleSystem.rotation.x = time * 0.01;
    }
    if (outerRing) {
      outerRing.rotation.z = -time * 0.03;
    }

    // Inertia-based interactive mouse offsets calculations
    mouseX += (targetX - mouseX) * 0.05;
    mouseY += (targetY - mouseY) * 0.05;

    // ROCKET IMAGE HOVER & TILT PHYSICS
    if (rocketContainer && !isMobileDevice) {
      const hoverY = Math.sin(time * 1.5) * 12;
      const tiltX = -mouseY * 18;
      const tiltY = mouseX * 18;
      
      rocketContainer.style.transform = `translate(-50%, calc(-50% + ${hoverY}px)) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(50px)`;
    }

    renderer.render(scene, camera);
  }

  // ==========================================
  // 2. TRANSITION CONTROLS AND FORMS API SETUP
  // ==========================================
  
  // Open button handler for all buttons
  const allOpenButtons = document.querySelectorAll('.primary-btn, .btn-secondary, .btn-primary, .call-btn, .schedule-btn, .work-call-btn, .transparent-btn');
  
  function openPopup() {
    if (overlay) {
      overlay.style.display = 'flex';
      setTimeout(() => {
        overlay.classList.add('active');
        if (formContainer) formContainer.style.display = 'flex';
        if (successScreen) successScreen.style.display = 'none';
        if (form) form.reset();
        onCanvasResize();
      }, 10);
    }
  }

  allOpenButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openPopup();
    });
  });

  if (openBtn) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openPopup();
    });
  }

  // Close overlay
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
          overlay.style.display = 'none';
        }, 500);
      }
    });
  }

  // Close click outside bounds
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
          overlay.style.display = 'none';
        }, 500);
      }
    });
  }

  // Simulating sleek Form submission
  function handleFormSubmit(event) {
    if (!form) return;
    event.preventDefault();

    const btn = form.querySelector('.submit');
    if (!btn) return;
    
    const originalHTML = btn.innerHTML;
    btn.innerHTML = 'Sending...';
    btn.style.opacity = '0.7';
    btn.style.pointerEvents = 'none';

    // Fake API response delay transition
    setTimeout(() => {
      if (formContainer) formContainer.style.display = 'none';
      if (successScreen) successScreen.style.display = 'flex';
      
      btn.innerHTML = originalHTML;
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';

      // Success message ke bad system safely slide-out hoga
      setTimeout(() => {
        if (overlay) {
          overlay.classList.remove('active');
          setTimeout(() => {
            if (overlay) overlay.style.display = 'none';
          }, 500);
        }
      }, 3500);
    }, 1200);
  }

  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }

  // Page loads everything sequentially
  window.addEventListener('load', () => {
    initThreeEngine();
    animateThree();

    // Settle elegant auto-popup opening
    setTimeout(() => {
      if (overlay) {
        overlay.style.display = 'flex';
        setTimeout(() => {
          overlay.classList.add('active');
          onCanvasResize();
        }, 10);
      }
    }, 600);
  });

  // ================= GSAP =================

  if (typeof gsap !== 'undefined') {
    window.addEventListener("load", function () {
      gsap.registerPlugin(ScrollTrigger);

      let mm = gsap.matchMedia();

      mm.add("(min-width: 1880px)", function () {
        gsap.to(".info-card", {
          y: 180,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-wrapper",
            start: "top top",
            end: "+=1500",
            scrub: true,
            pin: true
          }
        });
      });

      mm.add("(min-width: 1400px) and (max-width: 1879px)", function () {
        gsap.to(".info-card", {
          y: 480,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-wrapper",
            start: "top top",
            end: "+=1300",
            scrub: true,
            pin: true
          }
        });
      });

      mm.add("(min-width: 1025px) and (max-width: 1399px)", function () {
        gsap.to(".info-card", {
          y: 80,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-wrapper",
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin: true
          }
        });
      });

      mm.add("(max-width: 1024px)", function () {
        gsap.to(".info-card", {
          y: 50,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-wrapper",
            start: "top top",
            end: "+=800",
            scrub: true,
            pin: true
          }
        });
      });

      ScrollTrigger.refresh();
    });
  }

  // ================= SL POPUP FUNCTIONS =================
  
  // Open & Close function controller
  window.toggleSlPopup = function(show) {
    const mask = document.getElementById('slPopupOverlayMask');
    if (mask) {
      if (show) {
        mask.classList.add('sl-mask-visible');
      } else {
        mask.classList.remove('sl-mask-visible');
      }
    }
  };

  // File Selector stimulation handler
  window.triggerSlFileSelector = function() {
    const fileInput = document.getElementById('slFileSelectorElement');
    if (fileInput) fileInput.click();
  };

  // Display chosen filename in shield space
  window.handleSlFileSelection = function(e) {
    const file = e.target.files[0];
    const filenameLabel = document.getElementById('slAttachedFileName');
    if (filenameLabel) {
      if (file) {
        filenameLabel.textContent = `(${file.name})`;
      } else {
        filenameLabel.textContent = '';
      }
    }
  };

  // Submit and build beautiful success view inside white shield card
  window.handleSlFormSubmit = function(e) {
    e.preventDefault();
    const formShield = document.getElementById('slFormShieldContainer');
    
    if (formShield) {
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
  };
});
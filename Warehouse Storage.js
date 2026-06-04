
// ── Hamburger Menu ──
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (toggle && navLinks) {
        toggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});

// SECTION THREE SECTION THREE SECTION THREE SECTION THREE

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const currentItem = question.parentElement;

        /* Sab items close karo */
        document.querySelectorAll(".faq-item").forEach(item => {

            if (item !== currentItem) {
                item.classList.remove("active");

                const otherBtn = item.querySelector(".faq-btn");
                otherBtn.innerHTML = "+";
            }

        });

        /* Current toggle */
        currentItem.classList.toggle("active");

        const btn = currentItem.querySelector(".faq-btn");

        if (currentItem.classList.contains("active")) {
            btn.innerHTML = "−";
        } else {
            btn.innerHTML = "+";
        }

    });

});

// ── Section 13 Contact Animation ──
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

// /* SECTION 11 SECTION 11 SECTION 11 SECTION 11 SECTION 11 */

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".transparent-section",
        start: "top top",
        end: "+=150%",
        scrub: true,
        pin: true,
    }
});

// Step 1: Card move animation (opacity nahi change karna)
tl.to(".transparent-card", {
    y: 240,
    ease: "none",
});

// Step 2: Typing animation
tl.add(() => {
    const text = "Your Stock Is";
    const target = document.querySelector(".transparent-card h2 span");

    // reset text
    target.innerHTML = "";

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
});



const overlay = document.getElementById('popupOverlay');
const openBtn = document.getElementById('openPopupBtn');

// ✅ Yeh add karo
document.querySelectorAll(
    '.primary-btn, .btn-secondary, .btn-primary, .call-btn, .schedule-btn, .work-call-btn, .transparent-btn'
).forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // agar button link ke andar ho

        overlay.classList.add('active');

        if (formContainer) formContainer.style.display = 'flex';
        if (successScreen) successScreen.style.display = 'none';
        if (form) form.reset();

        if (typeof onCanvasResize === 'function') {
            onCanvasResize();
        }
    });
});
const closeBtn = document.getElementById('closePopupBtn');
const formContainer = document.getElementById('formContainer');
const successScreen = document.getElementById('successScreen');
const form = document.getElementById('consultationForm');
const card = document.getElementById('interactiveCard');

// ==========================================
// 1. VANILLA JS 3D TILT EFFECT FOR POPUP
// ==========================================
let isMobileDevice = window.innerWidth <= 900;

window.addEventListener('resize', () => {
    isMobileDevice = window.innerWidth <= 900;
    if (isMobileDevice) {
        card.style.transform = 'none';
    }
});


document.addEventListener('mousemove', (e) => {
    if (isMobileDevice || !overlay.classList.contains('active')) return;

    const halfWidth = window.innerWidth / 2;
    const halfHeight = window.innerHeight / 2;

    // Calculate offsets normalized from -1 to 1
    const mouseX = (e.clientX - halfWidth) / halfWidth;
    const mouseY = (e.clientY - halfHeight) / halfHeight;

    // Soft tilt angle values
    const rotateX = -mouseY * 12; // tilt upwards/downwards
    const rotateY = mouseX * 12;  // tilt sideways

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
});

// Reset tilt on mouseleave of the container
overlay.addEventListener('mouseleave', () => {
    if (isMobileDevice) return;
    card.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
});


// ==========================================
// 2. ACTIVE THREE.JS PARTICLES 3D GLOBE ENGINE
// ==========================================
let scene, camera, renderer, particleSystem, outerRing;
const leftPanel = document.getElementById('leftPanel');
const canvasContainer = document.getElementById('three-d-canvas');

// Mouse relative move tracking
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;

function initThreeEngine() {
    // Scene Setup
    scene = new THREE.Scene();

    // Camera Setup
    const width = leftPanel.clientWidth;
    const height = leftPanel.clientHeight;
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    // Renderer Setup
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasContainer.appendChild(renderer.domElement);

    // Light sources (subtle specularity details)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00d2ff, 2, 20);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Construct 3D Particle Constellation (Globe Structure)
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    const sphereRadius = 1.8;
    for (let i = 0; i < particleCount; i++) {
        // Generate uniform sphere shell locations
        const phi = Math.acos(Math.random() * 2 - 1);
        const theta = Math.random() * Math.PI * 2;

        positions[i * 3] = sphereRadius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = sphereRadius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = sphereRadius * Math.cos(phi);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // High-quality glowing particle material using a procedural circle textures
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

    // Add outer orbits structure (Sleek sci-fi tech look)
    const ringGeometry = new THREE.RingGeometry(2.4, 2.42, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x0052FF,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.25
    });
    outerRing = new THREE.Mesh(ringGeometry, ringMaterial);
    outerRing.rotation.x = Math.PI / 2.5;
    scene.add(outerRing);

    // Interactive mouse rotation tracking inside the left panel
    leftPanel.addEventListener('mousemove', (e) => {
        const rect = leftPanel.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        targetX = x * 0.0015;
        targetY = y * 0.0015;
    });

    // Resizing handler
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

// Three.js animation cycle loop
let clock = new THREE.Clock();

function animateThree() {
    requestAnimationFrame(animateThree);

    if (!renderer || !scene || !camera) return;

    const delta = clock.getDelta();
    const time = clock.getElapsedTime();

    // Constant elegant 3D space movements
    particleSystem.rotation.y = time * 0.12;
    particleSystem.rotation.x = time * 0.05;

    outerRing.rotation.z = -time * 0.15;

    // Inertia-based interactive mouse rotations
    mouseX += (targetX - mouseX) * 0.05;
    mouseY += (targetY - mouseY) * 0.05;

    particleSystem.rotation.y += mouseX;
    particleSystem.rotation.x += mouseY;
    outerRing.rotation.y = mouseX * 1.5;

    renderer.render(scene, camera);
}

// ==========================================
// 3. EVENT LISTENERS AND TRANSITIONS CONTROL
// ==========================================
// Open button handler
openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex'; // ✅ Yeh add karo
    overlay.classList.add('active');
    formContainer.style.display = 'flex';
    successScreen.style.display = 'none';
    form.reset();
    onCanvasResize();
});

// Baaki buttons ke liye bhi
document.querySelectorAll('.primary-btn, .btn-secondary, .btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        overlay.style.display = 'flex'; // ✅ Yeh bhi
        overlay.classList.add('active');
        formContainer.style.display = 'flex';
        successScreen.style.display = 'none';
        form.reset();
        onCanvasResize();
    });
});
// Close button handler
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
    overlay.style.display = 'none'; // ✅ Yeh add karo
    card.style.transform = 'rotateX(10deg) rotateY(-5deg) translateZ(-50px)';
});

// Close when clicking outside of the popup
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
        overlay.style.display = 'none'; // ✅ Yeh add karo
        card.style.transform = 'rotateX(10deg) rotateY(-5deg) translateZ(-50px)';
    }
});

// Safe Submit handler (Simulating success transition)
function handleFormSubmit(event) {
    event.preventDefault();

    const btn = form.querySelector('.submit');
    btn.innerHTML = 'Sending...';
    btn.style.opacity = '0.7';
    btn.style.pointerEvents = 'none';

    // Simulate transition to success screen (1.2 seconds)
    setTimeout(() => {
        formContainer.style.display = 'none';
        successScreen.style.display = 'flex';

        // Auto close popup with delay
        setTimeout(() => {
            overlay.classList.remove('active');
            card.style.transform = 'rotateX(10deg) rotateY(-5deg) translateZ(-50px)';
        }, 3500);
    }, 1200);
}

// Start initialization on window load
window.addEventListener('load', () => {
    initThreeEngine();
    animateThree();

    // Auto open popup after page starts (very clean delay transition)
    setTimeout(() => {
        overlay.classList.add('active');
        onCanvasResize();
    }, 600);
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
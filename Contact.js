// ================= NAVBAR =================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// ================= GSAP ANIMATION =================

window.addEventListener("load", function () {

    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {

        gsap.registerPlugin(ScrollTrigger);

        let mm = gsap.matchMedia();

        // 1880px+
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

        // 1400px - 1879px
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

        // 1025px - 1399px
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

        // Mobile
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
    }
});


// ================= SECTION 13 ANIMATION =================

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


// ================= CONTACT POPUP =================

document.addEventListener("click", function (e) {

    if (
        e.target.closest(".popup-trigger") ||
        e.target.closest(".btn-primary") ||
        e.target.closest(".btn-secondary")
    ) {

        e.preventDefault();

        const popupOverlay = document.getElementById("popupOverlay");

        if (popupOverlay) {
            popupOverlay.style.display = "flex";
        }
    }

    // Close Popup Button
    if (e.target.closest("#closePopup")) {

        const popupOverlay = document.getElementById("popupOverlay");

        if (popupOverlay) {
            popupOverlay.style.display = "none";
        }
    }

    // Close Popup Outside Click
    const popupOverlay = document.getElementById("popupOverlay");

    if (popupOverlay && e.target === popupOverlay) {
        popupOverlay.style.display = "none";
    }
});


// ================= LOGIN / SIGNUP POPUP =================

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
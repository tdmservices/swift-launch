const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// animation five animation five animation five animation five

window.addEventListener("load", function () {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    // 1880px aur us se upar
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

    // 1400px se 1879px tak
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

    // 1025px se 1399px tak
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

    // Mobile / Tablet
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

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
    const text = "Money Goes";
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
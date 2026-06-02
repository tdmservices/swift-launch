const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* SECTION THREE SECTION THREE SECTION THREE SECTION THREE ECTION THREE */

const buttons = document.querySelectorAll(".filters button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        // remove active class from all buttons
        buttons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // add active class to clicked button
        button.classList.add("active");

    });
});

//   <!-- SECTION FIVE SECTION FIVE SECTION FIVE SECTION FIVE SECTION FIVE -->

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


//  <!-- SECTION EIGHT SECTION EIGHT SECTION EIGHT SECTION EIGHT  -->

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

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {
            faq.classList.remove("active");
        });

        item.classList.add("active");
    });
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

// /* <!-- SECTON SIX SECTION SIX SECTION SIX SECTION SIX --> */

const button = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        // remove active class
        buttons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // add active class
        button.classList.add("active");

        // get filter value
        const filter = button.getAttribute("data-filter");

        // filter cards
        cards.forEach((card) => {

            const category = card.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

// SECTION FOUR SECTION FOUR SECTION FOUR 

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const speed = target / 100;

    const updateCount = () => {

        count += speed;

        if (count < target) {

            // decimal support
            if (target % 1 !== 0) {
                counter.innerText = count.toFixed(1);
            } else {
                counter.innerText = Math.floor(count);
            }

            requestAnimationFrame(updateCount);

        } else {

            // final value
            if (target % 1 !== 0) {
                counter.innerText = target.toFixed(1);
            } else {
                counter.innerText = target;
            }
        }
    };

    updateCount();
};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            observer.unobserve(entry.target);
        }
    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    observer.observe(counter);
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


document.addEventListener("click", function (e) {

    if (
        e.target.closest(".popup-trigger") ||
        e.target.closest(".btn-primary") ||
        e.target.closest(".btn-secondary") ||
        e.target.closest(".primary-btn") ||
        e.target.closest(".arrow-btn") ||
        e.target.closest(".consult-btn") ||
        e.target.closest(".button-two")
    ) {
        e.preventDefault();

        const popupOverlay = document.getElementById("popupOverlay");

        if (popupOverlay) {
            popupOverlay.style.display = "flex";
        }
    }

    // Close Popup
    if (e.target.closest("#closePopup")) {
        document.getElementById("popupOverlay").style.display = "none";
    }

    // Click Outside
    const popupOverlay = document.getElementById("popupOverlay");

    if (e.target === popupOverlay) {
        popupOverlay.style.display = "none";
    }
});

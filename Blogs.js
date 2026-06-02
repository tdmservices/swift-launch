function filterAllBlogs(category) {
    const allCards = document.querySelectorAll('#blogsGrid .blog-card');
    const sidebarItems = document.querySelectorAll('.blog-sidebar .sidebar-item');

    sidebarItems.forEach(item => {
        const filterVal = item.getAttribute('data-filter');
        if ((category === 'all' && filterVal === 'all') || (filterVal === category)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    let visibleCount = 0;
    if (category === 'all') {
        allCards.forEach(card => {
            card.classList.remove('hidden');
            visibleCount++;
        });
    } else {
        allCards.forEach(card => {
            const cardCat = card.getAttribute('data-category');
            if (cardCat === category) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });
    }

    const gridContainer = document.getElementById('blogsGrid');
    let noResultDiv = document.querySelector('#blogsGrid .no-results');
    if (visibleCount === 0) {
        if (!noResultDiv) {
            const msgDiv = document.createElement('div');
            msgDiv.className = 'no-results';
            msgDiv.innerHTML = '✨ No articles found in this category. Browse other topics!';
            gridContainer.appendChild(msgDiv);
        }
    } else {
        if (noResultDiv) noResultDiv.remove();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    filterAllBlogs('all');
    const allImages = document.querySelectorAll('.blog-card img');
    allImages.forEach(img => {
        img.style.objectFit = 'cover';
    });
});

// ── FAQ Toggle ──
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


// ── Plan Cards Animation ──
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
        e.target.closest(".btn-secondary") 

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
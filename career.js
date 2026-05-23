// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Filter buttons — WORKING
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        let count = 0;
        document.querySelectorAll('.role-item').forEach(item => {
            const dept = item.getAttribute('data-dept');
            if (filter === 'all' || dept === filter) {
                item.style.display = 'grid';
                item.style.animation = 'fadeIn 0.3s ease';
                count++;
            } else {
                item.style.display = 'none';
            }
        });
        const badge = document.getElementById('role-count');
        if (badge) badge.textContent = count + ' open position' + (count !== 1 ? 's' : '');
    });
});

// Role click
document.querySelectorAll('.role-item').forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('.role-title').textContent;
        alert('Apply for: ' + title + '\n\nYahan apna actual job link lagayen!');
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

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (toggle && navLinks) {
        toggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});

// ============================
// MOBILE NAVBAR
// ============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    menuToggle.textContent =
        navMenu.classList.contains("active") ? "✕" : "☰";
});

// Tutup menu setelah link diklik

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


// ============================
// SKILL BAR ANIMATION
// ============================

const skillSection = document.querySelector(".skills");
const skillBars = document.querySelectorAll(".skill-progress");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            skillBars.forEach(bar => {
                bar.style.width = getComputedStyle(bar)
                    .getPropertyValue("--progress");
            });

            observer.unobserve(skillSection);
        }

    });

}, {
    threshold: 0.3
});

observer.observe(skillSection);


// ============================
// SCROLL REVEAL
// ============================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-box, .about-info, .project-card, .skill-item, .social-link"
);

revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.7s ease";
});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            revealObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// ============================
// NAVBAR SCROLL EFFECT
// ============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    } else {
        header.style.boxShadow = "none";
    }

});

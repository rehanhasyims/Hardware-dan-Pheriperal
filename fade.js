document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const fadeElements = document.querySelectorAll('.fade-js');

fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.4s ease-out, transform 0.4s ease-out"; // durasi lebih cepat
});

function checkFade() {
    fadeElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.85) {
            setTimeout(() => {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }, index * 100); // delay lebih pendek
        }
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', () => {
    fadeElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            setTimeout(() => {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }, index * 100);
        }
    });
    checkFade();
});

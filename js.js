// Disminuir tamaño del header al hacer scroll
window.addEventListener("scroll", () => {
    document.getElementById("header").classList.toggle("shrink", window.scrollY > 50);
});

// Animación de entrada para las tarjetas (Scroll Reveal)
const reveals = document.querySelectorAll(".reveal");
const checkScroll = () => {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);

// Movimiento de la luz verde ambiental con el cursor
document.addEventListener("mousemove", (e) => {
    const luz = document.getElementById("luz");
    if (luz) {
        luz.style.left = (e.clientX - 175) + "px";
        luz.style.top = (e.clientY - 175) + "px";
    }
});
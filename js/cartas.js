/* ==========================================
   CARTAS
   Transição da galeria para as cartinhas e clique nas cartas.
========================================== */

const cartas = document.getElementById("cartas");
const abrirCartas = document.getElementById("abrirCartas");

abrirCartas.onclick = () => {
    galeria.classList.add("hidden");
    cartas.classList.remove("hidden");
    cartas.scrollIntoView({
        behavior: "smooth"
    });
};

document.querySelectorAll(".carta").forEach(c => {
    c.onclick = () => {
        c.style.transform = "scale(1.05) translateY(-5px)";
        c.style.background = "rgba(201, 166, 107, 0.15)";
        c.style.boxShadow = "0 15px 40px rgba(201, 166, 107, 0.3)";
    };
});

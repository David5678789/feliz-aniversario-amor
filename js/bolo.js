/* ==========================================
   BOLO VIRTUAL
   Transição das cartas para o bolo e apagar velinhas.
========================================== */

const bolo = document.getElementById("bolo");
const irBolo = document.getElementById("irBolo");
const apagarVelas = document.getElementById("apagarVelas");

irBolo.onclick = () => {
    cartas.classList.add("hidden");
    bolo.classList.remove("hidden");
    bolo.scrollIntoView({
        behavior: "smooth"
    });
};

apagarVelas.onclick = () => {
    document.querySelectorAll(".vela").forEach(v => {
        v.style.opacity = 0.25;
    });

    // Paleta elegante para confete
    const colors = ['#c9a66b', '#f3ede2', '#5c2431', '#e8d7c3'];

    confetti({
        particleCount: 200,
        spread: 180,
        origin: { y: 0.6 },
        colors: colors,
        gravity: 0.8,
        decay: 0.95
    });

    setTimeout(() => {
        bolo.classList.add("hidden");
        final.classList.remove("hidden");
        final.scrollIntoView({
            behavior: "smooth"
        });
        fogos();
    }, 2500);
};

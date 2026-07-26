/* ==========================================
   BOLO VIRTUAL COM VELAS ANIMADAS
   Transição das cartas para o bolo e apagar velinhas.
========================================== */

const bolo = document.getElementById("bolo");
const irBolo = document.getElementById("irBolo");
const apagarVelas = document.getElementById("apagarVelas");
const candles = document.querySelectorAll(".candle");

irBolo.onclick = () => {
    cartas.classList.add("hidden");
    bolo.classList.remove("hidden");
    bolo.scrollIntoView({
        behavior: "smooth"
    });
};

apagarVelas.onclick = () => {
    // Apagar as velas uma por uma com animação
    candles.forEach((candle, index) => {
        setTimeout(() => {
            candle.classList.add("apagada");
        }, index * 200);
    });

    // Disparar confete elegante após apagar todas as velas
    setTimeout(() => {
        const colors = ['#c9a66b', '#f3ede2', '#5c2431', '#e8d7c3'];

        confetti({
            particleCount: 200,
            spread: 180,
            origin: { y: 0.6 },
            colors: colors,
            gravity: 0.8,
            decay: 0.95
        });

        // Transição para a tela final após confete
        setTimeout(() => {
            bolo.classList.add("hidden");
            final.classList.remove("hidden");
            final.scrollIntoView({
                behavior: "smooth"
            });
            fogos();
        }, 1500);
    }, candles.length * 200 + 500);
};

/* ==========================================
   FOGOS DE ARTIFÍCIO / CONFETES ELEGANTES
   Usa a lib canvas-confetti com paleta sofisticada
   (dourado, marfim, vinho)
========================================== */

function fogos() {
    const duration = 5000;
    const end = Date.now() + duration;
    
    // Paleta elegante
    const colors = ['#c9a66b', '#f3ede2', '#5c2431', '#e8d7c3'];

    (function frame() {
        confetti({
            particleCount: 4,
            angle: 60,
            spread: 50,
            origin: { x: 0 },
            colors: colors,
            gravity: 0.5,
            decay: 0.95
        });

        confetti({
            particleCount: 4,
            angle: 120,
            spread: 50,
            origin: { x: 1 },
            colors: colors,
            gravity: 0.5,
            decay: 0.95
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

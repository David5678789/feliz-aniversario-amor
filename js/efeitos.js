/* ==========================================
   EFEITOS GERAIS
   Inicializa a lib AOS (Animate On Scroll) com
   configurações elegantes para transições suaves.
========================================== */

AOS.init({
    once: true,
    duration: 1000,
    easing: 'ease-in-out-cubic',
    offset: 100,
    delay: 0
});

// Adiciona classe de animação aos elementos quando carregam
document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('h1, h2, p, .carta, .galeria img');
    elementos.forEach((el, index) => {
        el.setAttribute('data-aos', 'fade-in-up');
        el.setAttribute('data-aos-delay', index * 50);
    });
});

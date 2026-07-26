/* ==========================================
   EFEITOS GERAIS
   Inicializa a lib AOS (Animate On Scroll) com
   configurações otimizadas para leitura e visibilidade.
========================================== */

// Aguardar o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS com configurações melhoradas
    AOS.init({
        once: false,           // Permite que a animação execute sempre que o elemento entra na viewport
        duration: 800,         // Duração da animação em ms (aumentado para melhor leitura)
        easing: 'ease-in-out-cubic',
        offset: 50,            // Distância do topo para disparar a animação
        delay: 0,
        disable: false
    });
    
    // Garantir que todos os elementos com data-aos permaneçam visíveis
    const aosElements = document.querySelectorAll('[data-aos]');
    aosElements.forEach(el => {
        // Após a animação completar, garantir opacidade total
        el.addEventListener('aos:in', function() {
            this.style.opacity = '1';
            this.style.transform = 'none';
        });
    });
    
    // Adicionar animação aos títulos e textos principais se não tiverem
    const titles = document.querySelectorAll('h1, h2, h3');
    titles.forEach((el, index) => {
        if (!el.hasAttribute('data-aos')) {
            el.setAttribute('data-aos', 'fade-in-up');
            el.setAttribute('data-aos-delay', index * 100);
            el.setAttribute('data-aos-duration', '800');
        }
    });
    
    // Reinicializar AOS após adicionar novos atributos
    setTimeout(() => {
        AOS.refresh();
    }, 100);
});

// Também inicializar AOS imediatamente (fallback)
if (typeof AOS !== 'undefined') {
    AOS.init({
        once: false,
        duration: 800,
        easing: 'ease-in-out-cubic',
        offset: 50,
        delay: 0
    });
}

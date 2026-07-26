/* ==========================================
   PARTÍCULAS FLUTUANTES ELEGANTES
   Cria partículas discretas subindo pela tela
   com cores da paleta sofisticada
========================================== */

function criarParticula() {
    const particula = document.createElement("div");
    
    particula.className = "particula-elegante";
    
    // Paleta elegante
    const colors = ['#c9a66b', '#f3ede2', '#5c2431', '#e8d7c3'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    const tamanho = 2 + Math.random() * 4;
    
    particula.style.left = Math.random() * 100 + "vw";
    particula.style.width = tamanho + "px";
    particula.style.height = tamanho + "px";
    particula.style.backgroundColor = color;
    particula.style.borderRadius = "50%";
    particula.style.position = "fixed";
    particula.style.pointerEvents = "none";
    particula.style.opacity = "0.6";
    particula.style.animation = `floatParticle ${8 + Math.random() * 5}s ease-in forwards`;
    particula.style.bottom = "-10px";
    
    document.body.appendChild(particula);
    
    setTimeout(() => {
        particula.remove();
    }, 13000);
}

setInterval(criarParticula, 1200);

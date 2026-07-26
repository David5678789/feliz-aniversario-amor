/* ==========================================
   CARTAS - ENVELOPES ANIMADOS
   Transição da galeria para as cartinhas e
   animação de abertura dos envelopes.
========================================== */

const cartas = document.getElementById("cartas");
const abrirCartas = document.getElementById("abrirCartas");
const envelopes = document.querySelectorAll(".envelope");

// Evento para ir da galeria para as cartas
abrirCartas.onclick = () => {
    const galeria = document.getElementById("galeria");
    galeria.classList.add("hidden");
    cartas.classList.remove("hidden");
    cartas.scrollIntoView({
        behavior: "smooth"
    });
    
    // Inicializar envelopes após a seção aparecer
    setTimeout(() => {
        inicializarEnvelopes();
    }, 500);
};

function inicializarEnvelopes() {
    envelopes.forEach((envelope, index) => {
        // Remover classe "aberto" se existir
        envelope.classList.remove("aberto");
        
        // Garantir que a frente está visível inicialmente
        const front = envelope.querySelector(".envelope-front");
        const back = envelope.querySelector(".envelope-back");
        
        if (front) front.style.display = "flex";
        if (back) back.style.display = "none";
        
        // Adicionar evento de clique
        envelope.onclick = (e) => {
            e.stopPropagation();
            abrirEnvelope(envelope);
        };
        
        // Adicionar animação de entrada
        envelope.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`;
        envelope.style.opacity = "1";
    });
}

function abrirEnvelope(envelope) {
    const front = envelope.querySelector(".envelope-front");
    const back = envelope.querySelector(".envelope-back");
    
    // Verificar se está aberto
    const isOpen = envelope.classList.contains("aberto");
    
    if (isOpen) {
        // Fechar: mostrar frente, esconder verso
        envelope.classList.remove("aberto");
        front.style.display = "flex";
        back.style.display = "none";
    } else {
        // Abrir: esconder frente, mostrar verso
        envelope.classList.add("aberto");
        front.style.display = "none";
        back.style.display = "flex";
    }
}

// Fechar envelopes ao clicar fora deles
document.addEventListener("click", (e) => {
    // Se clicou fora de um envelope, fechar todos
    if (!e.target.closest(".envelope")) {
        envelopes.forEach(env => {
            env.classList.remove("aberto");
            const front = env.querySelector(".envelope-front");
            const back = env.querySelector(".envelope-back");
            if (front) front.style.display = "flex";
            if (back) back.style.display = "none";
        });
    }
});

/* ==========================================
   CARTAS - ENVELOPES ANIMADOS
   Transição da galeria para as cartinhas e
   animação de abertura dos envelopes.
========================================== */

const cartas = document.getElementById("cartas");
const abrirCartas = document.getElementById("abrirCartas");
const envelopes = document.querySelectorAll(".envelope");

abrirCartas.onclick = () => {
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
        
        // Adicionar evento de clique
        envelope.onclick = (e) => {
            e.stopPropagation();
            abrirEnvelope(envelope);
        };
        
        // Adicionar animação de entrada
        envelope.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`;
        envelope.style.opacity = "0";
    });
}

function abrirEnvelope(envelope) {
    // Toggle da classe aberto
    envelope.classList.toggle("aberto");
}

// Fechar envelopes ao clicar fora deles
document.addEventListener("click", (e) => {
    if (!e.target.closest(".envelope")) {
        envelopes.forEach(env => {
            env.classList.remove("aberto");
        });
    }
});

/* ==========================================
   FINAL
   Última seção: mensagem de encerramento
   e botão de voltar ao início.
========================================== */

const final = document.getElementById("final");
const voltarInicio = document.getElementById("voltarInicio");
const home = document.getElementById("home");

voltarInicio.onclick = () => {
    // Esconder todas as seções
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("hidden");
    });
    
    // Mostrar home novamente
    home.classList.remove("hidden");
    home.scrollIntoView({
        behavior: "smooth"
    });
    
    // Parar a música (opcional - descomente se quiser)
    // musica.pause();
};

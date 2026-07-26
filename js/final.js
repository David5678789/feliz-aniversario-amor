/* ==========================================
   FINAL - NAVEGAÇÃO DE VOLTA
   ========================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Usamos um nome de variável diferente para evitar conflitos
    const botaoVoltarAction = document.getElementById("voltarInicio");
    const secaoHome = document.getElementById("home");
    const todasAsSecoes = document.querySelectorAll("section");

    if (botaoVoltarAction) {
        botaoVoltarAction.onclick = function(e) {
            e.preventDefault(); // Evita qualquer comportamento padrão
            
            // Esconde todas as seções da página
            todasAsSecoes.forEach(section => {
                section.classList.add("hidden");
            });
            
            // Mostra apenas a tela inicial (Home)
            if (secaoHome) {
                secaoHome.classList.remove("hidden");
                
                // Rola para o topo suavemente
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
            
            console.log("Retornando ao início...");
        };
    }
});

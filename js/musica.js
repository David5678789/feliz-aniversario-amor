/* ==========================================
   MÚSICA
   Controla a trilha sonora de fundo.
========================================== */

const musica = new Audio("assets/musicas/musica.mp3");

musica.loop = true;
musica.volume = 0.35;

function tocarMusica(){
    musica.play().catch(()=>{
        console.log("Autoplay de música bloqueado pelo navegador. O usuário precisa interagir novamente.");
    });
}

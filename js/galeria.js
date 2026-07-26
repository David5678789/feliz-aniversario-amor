/* ==========================================
   GALERIA
   Transição do vídeo para a galeria de fotos.
========================================== */

const galeria = document.getElementById("galeria");
const continuarGaleria = document.getElementById("continuarGaleria");
const video = document.getElementById("videoPrincipal");

continuarGaleria.onclick=()=>{

    video.pause();

    videoSection.classList.add("hidden");

    galeria.classList.remove("hidden");

    galeria.scrollIntoView({
        behavior:"smooth"
    });

};

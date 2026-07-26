/* ==========================================
   HOME
   Tela inicial: botão "Abrir Minha Surpresa".
========================================== */

const home = document.getElementById("home");
const videoSection = document.getElementById("videoSection");
const btnComecar = document.getElementById("btnComecar");

btnComecar.onclick=()=>{

    tocarMusica();

    fogos();

    home.classList.add("hidden");

    videoSection.classList.remove("hidden");

    videoSection.scrollIntoView({
        behavior:"smooth"
    });

};

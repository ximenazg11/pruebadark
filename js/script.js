/* MENU */
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");

menuToggle.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
});


/* RELEASES SLIDER */

const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".release-slide");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    updateSlider();
});

prevBtn.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    updateSlider();
});
/* VIDEO RESPONSIVE */

const heroVideo = document.getElementById("heroVideo");
const videoSource = document.getElementById("videoSource");

function loadVideo() {

    if(window.innerWidth <= 768){

        // CELULAR
        videoSource.src = "img/LANDING PAGE MOBILE.mp4";

    } else {

        // PC Y TABLET
        videoSource.src = "img/LANDING PAGE DESKTOP.mp4";

    }

    heroVideo.load();
}

loadVideo();

window.addEventListener("resize", loadVideo);

window.addEventListener("load", () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});
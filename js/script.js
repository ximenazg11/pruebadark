/* MENU */

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
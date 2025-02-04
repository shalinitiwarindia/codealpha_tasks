let currentIndex = 0;
let images = document.querySelectorAll(".gallery img");
let modal = document.getElementById("modal");
let fullImage = document.getElementById("fullImage");

function openModal(index) {
    currentIndex = index;
    fullImage.src = images[currentIndex].src;
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    fullImage.src = images[currentIndex].src;
}

document.addEventListener("keydown", (event) => {
    if (modal.style.display === "flex") {
        if (event.key === "ArrowRight") changeImage(1);
        if (event.key === "ArrowLeft") changeImage(-1);
        if (event.key === "Escape") closeModal();
    }
});

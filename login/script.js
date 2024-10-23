const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let currentImage = 0;

function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    carousel.style.transform = `translateX(-${currentImage * 100}%)`;
}

function prevImage() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    carousel.style.transform = `translateX(-${currentImage * 100}%)`;
}

// Iniciar la animación del carrusel
setInterval(prevImage, 3000); // Cambia la imagen cada 3 segundos
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    let currentImage = 0;

    function nextImage() {
        currentImage = (currentImage + 1) % images.length;
        carousel.style.transform = `translateX(-${currentImage * 100}%)`;
    }

    setInterval(nextImage, 3000); // Cambia la imagen cada 3 segundos
// Agregando borde a una imagen

document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.container-img img');

    const originalImg = '../img/Nube con escalera derecha.jpg';
    const newImg = '../img/Nube con escalera curva.jpg';

    image.addEventListener('click', function() {
        image.classList.toggle('bordered');

        if (image.classList.contains('bordered')) {
            image.setAttribute('src', newImg);
        } else {
            image.setAttribute('src', originalImg);
        }
    });
});
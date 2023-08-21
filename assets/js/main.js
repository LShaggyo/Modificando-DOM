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

// Seccion Stickers

document.getElementById('calculateBtn').addEventListener('click', function() {
    const input1 = parseInt(document.querySelector('.container-pic:nth-child(1) input').value) || 0;
    const input2 = parseInt(document.querySelector('.container-pic:nth-child(2) input').value) || 0;
    const input3 = parseInt(document.querySelector('.container-pic:nth-child(3) input').value) || 0;

    const totalStickers = input1 + input2 + input3;

    const totalMessage = document.getElementById('totalMessage');
    const errorMessage = document.getElementById('errorMessage');

    totalMessage.textContent = "";
    errorMessage.textContent = "";

    if (totalStickers <= 10) {
        totalMessage.textContent = "Llevas " + totalStickers + " stickers";
    } else {
        errorMessage.textContent = "Llevas demasiados stickers";
    }
    document.getElementById('resetBtn').classList.remove('hidden');
});

document.getElementById('resetBtn').addEventListener('click', function() {
    const inputs = document.querySelectorAll('.container-pic input');
    inputs.forEach(input => {
        input.value = '0';
    });
    document.getElementById('totalMessage').textContent = '';
    document.getElementById('errorMessage').textContent = '';
    
    document.getElementById('resetBtn').classList.add('hidden');
});

function negativeNumbers() {
    if (parseInt(this.value) < 0) {
        this.value = 0;
    }
}

const inputs = document.querySelectorAll('.container-pic input');
inputs.forEach(input => {
    input.addEventListener('input', negativeNumbers);
});
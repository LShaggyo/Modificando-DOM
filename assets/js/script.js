// Seccion Password

document.getElementById('verifyBtn').addEventListener('click', function() {
    const selects = document.querySelectorAll('.column select');
    const code = Array.from(selects).map(select => select.value).join('');

    const messageContainer = document.getElementById('messageVerify');

    switch (code) {
        case '911':
            messageContainer.textContent = 'Código de ingreso 1 es correcto';
            messageContainer.style.color = 'green';
            break;
        case '714':
            messageContainer.textContent = 'Código de ingreso 2 verificado';
            messageContainer.style.color = 'green';
            break;
        default:
            messageContainer.textContent = 'Código incorrecto';
            messageContainer.style.color = 'red';
            break;
    }
});
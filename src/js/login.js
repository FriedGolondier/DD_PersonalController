document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-box form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevenir el envío normal del formulario

        const usuario = document.getElementById('usuario').value;

        // Redirecciones según el usuario
        if (usuario === 'mau@rh.com') {
            window.location.href = '/src/pages/recursosHumanos.html';
        } else if (usuario === 'karen@nom.com') {
            window.location.href = '/src/pages/nomina.html';
        } else if (usuario === 'isi@ryc.com') {
            window.location.href = '/src/pages/registroControl.html';
        } else {
            alert('Usuario no reconocido');
        }
    });
});
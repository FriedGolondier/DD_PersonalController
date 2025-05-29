document.addEventListener('DOMContentLoaded', function () {
    // Botón de cerrar sesión
    const logoutBtn = document.querySelector('.logout-btn');
    logoutBtn.addEventListener('click', function () {
        window.location.href = '/index.html';
    });

    // Elementos del formulario
    const inputEmp = document.querySelector('.input-emp');
    const verRegistroBtn = document.querySelector('.actions .btn-beige:first-child');
    const reportBox = document.querySelector('.report-box');
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    inputEmp.parentNode.insertBefore(errorMessage, inputEmp.nextSibling);

    // Botón Ver Registro de Asistencia
    verRegistroBtn.addEventListener('click', function (e) {
        e.preventDefault();

        if (inputEmp.value.trim() === '') {
            inputEmp.classList.add('input-error');
            errorMessage.textContent = 'Por favor ingrese un nombre de empleado';
            errorMessage.style.display = 'block';
            reportBox.style.backgroundImage = 'none';
            return;
        }

        inputEmp.classList.remove('input-error');
        errorMessage.style.display = 'none';
        reportBox.style.backgroundImage = 'url("https://i.pinimg.com/1200x/0a/0d/e3/0a0de36911f175adc8a34bfacd4f6cc4.jpg")';
        reportBox.style.backgroundSize = 'cover';
        reportBox.style.backgroundPosition = 'center';
        reportBox.style.backgroundRepeat = 'no-repeat';
    });

    // Botón de enviar reporte
    const enviarReporteBtn = document.querySelector('.enviar-reporte-btn');
    enviarReporteBtn.addEventListener('click', function (e) {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: '¡Reporte enviado!',
            text: 'El reporte ha sido enviado correctamente',
            confirmButtonColor: '#b19174'
        });
    });

    // Botón de generar reporte
    const generarReporteBtn = document.querySelector('.generar-reporte-btn');
    generarReporteBtn.addEventListener('click', function (e) {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: '¡Reporte generado!',
            text: 'El reporte se ha generado exitosamente',
            confirmButtonColor: '#b19174'
        });
    });

    // Botón de guardar horas
    const guardarHorasBtn = document.querySelector('.guardar-horas-btn');
    guardarHorasBtn.addEventListener('click', function (e) {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: '¡Horas guardadas!',
            text: 'El cálculo de horas ha sido guardado',
            confirmButtonColor: '#b19174'
        });
    });
});

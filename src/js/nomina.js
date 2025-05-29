document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.querySelector('.logout-btn');
    logoutBtn.addEventListener('click', function () {
        window.location.href = '/index.html';
    });

    const nombreInput = document.querySelector('.input-emp');
    const consultarDatosBtn = document.querySelector('.consultar-datos-btn');
    const consultarHistorialBtn = document.querySelector('.consultar-historial-btn');
    const datosHistorialBox = document.querySelector('.datos-historial-box');

    const errorMessageNombre = document.createElement('div');
    errorMessageNombre.className = 'error-message';
    nombreInput.parentNode.insertBefore(errorMessageNombre, nombreInput.nextSibling);

    consultarDatosBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (nombreInput.value.trim() === '') {
            nombreInput.classList.add('input-error');
            errorMessageNombre.textContent = 'Por favor ingrese un nombre de empleado';
            errorMessageNombre.style.display = 'block';
            datosHistorialBox.style.backgroundImage = 'none';
            return;
        }
        nombreInput.classList.remove('input-error');
        errorMessageNombre.style.display = 'none';
        datosHistorialBox.style.backgroundImage = 'url("https://i.pinimg.com/236x/da/ef/e4/daefe4a61442bcbd656e3f13adfae32e.jpg")';
        datosHistorialBox.style.backgroundSize = 'contain';
        datosHistorialBox.style.backgroundPosition = 'center';
        datosHistorialBox.style.backgroundRepeat = 'no-repeat';
    });

    consultarHistorialBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (nombreInput.value.trim() === '') {
            nombreInput.classList.add('input-error');
            errorMessageNombre.textContent = 'Por favor ingrese un nombre de empleado';
            errorMessageNombre.style.display = 'block';
            datosHistorialBox.style.backgroundImage = 'none';
            return;
        }
        nombreInput.classList.remove('input-error');
        errorMessageNombre.style.display = 'none';
        datosHistorialBox.style.backgroundImage = 'url("https://pbs.twimg.com/media/GF_xZyYWUAAnJUT?format=jpg&name=large")';
        datosHistorialBox.style.backgroundSize = 'contain';
        datosHistorialBox.style.backgroundPosition = 'center';
        datosHistorialBox.style.backgroundRepeat = 'no-repeat';
    });

    const configAlerts = {
        '.calcular-pago-btn': 'Pago guardado en la base de datos',
        '.generar-recibo-btn': 'Recibo generado exitosamente',
        '.guardar-recibo-btn': 'Recibo guardado con éxito',
        '.enviar-recibo-btn': 'Recibo enviado correcamente',
    };

    Object.entries(configAlerts).forEach(([selector, message]) => {
        const btn = document.querySelector(selector);
        if (btn) {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                Swal.fire({
                    icon: 'success',
                    title: '¡Acción completada!',
                    text: message,
                    confirmButtonColor: '#b19174'
                });
            });
        }
    });

    // Validación y visualización del folio
    const folioInput = document.querySelector('.panel:nth-child(3) .input-emp');
    const descripcionBox = document.querySelector('.descripcion-box');
    const consultarPagoBtn = document.querySelector('.consultar-pago-btn');

    const errorMessageFolio = document.createElement('div');
    errorMessageFolio.className = 'error-message';
    folioInput.parentNode.insertBefore(errorMessageFolio, folioInput.nextSibling);

    consultarPagoBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (folioInput.value.trim() === '') {
            folioInput.classList.add('input-error');
            errorMessageFolio.textContent = 'Por favor ingrese un folio';
            errorMessageFolio.style.display = 'block';
            descripcionBox.style.backgroundImage = 'none';
            return;
        }
        folioInput.classList.remove('input-error');
        errorMessageFolio.style.display = 'none';
        descripcionBox.style.backgroundImage = 'url("https://preview.redd.it/luna-celebrating-my-birthday-with-me-v0-yn8o453vimud1.jpeg?width=640&crop=smart&auto=webp&s=bd3e1fa6a226595e4e1374607c1fd09dd8976cc2")';
        descripcionBox.style.backgroundSize = 'contain';
        descripcionBox.style.backgroundPosition = 'center';
        descripcionBox.style.backgroundRepeat = 'no-repeat';
    });
});

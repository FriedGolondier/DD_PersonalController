document.addEventListener('DOMContentLoaded', function () {
    // Botón de cerrar sesión
    const logoutBtn = document.querySelector('.logout-btn');
    logoutBtn.addEventListener('click', function () {
        window.location.href = '/index.html';
    });

    // Elementos del formulario
    const buscarBtn = document.querySelector('.buscar-btn');
    const nombreInput = document.querySelector('input[type="text"]');
    const visualBox = document.querySelector('.visual-box');
    const enviarBtn = document.querySelector('.enviar-btn'); // Añadido
    const guardarBtn = document.querySelector('.guardar-btn'); // Añadido
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    nombreInput.parentNode.insertBefore(errorMessage, buscarBtn);

    // Validación y búsqueda
    buscarBtn.addEventListener('click', function () {
        if (nombreInput.value.trim() === '') {
            nombreInput.classList.add('input-error');
            errorMessage.textContent = 'Por favor ingrese un nombre de empleado';
            errorMessage.style.display = 'block';
            visualBox.style.backgroundImage = 'none';
            return;
        }

        nombreInput.classList.remove('input-error');
        errorMessage.style.display = 'none';

        // Mostrar la imagen
        visualBox.style.backgroundImage = 'url("https://imgs.search.brave.com/w3LvqnjSJ7l18IvxXdgXsL40mXfjnta_us9HwxEuuAw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mLzlm/NmFlYzMxLTIwZTgt/NDU0Mi05NzJkLWVi/NGIyODUzYThlMC9k/Z2M4ZmhpLTM3Mjk1/MWY3LTk3YjAtNDVj/Yi1iMGRjLWFjZDRm/NmM4M2QwNS5qcGc_/dG9rZW49ZXlKMGVY/QWlPaUpLVjFRaUxD/SmhiR2NpT2lKSVV6/STFOaUo5LmV5Snpk/V0lpT2lKMWNtNDZZ/WEJ3T2pkbE1HUXhP/RGc1T0RJeU5qUXpO/ek5oTldZd1pEUXhO/V1ZoTUdReU5tVXdJ/aXdpYVhOeklqb2lk/WEp1T21Gd2NEbzNa/VEJrTVRnNE9UZ3lN/alkwTXpjellUVm1N/R1EwTVRWbFlUQmtN/alpsTUNJc0ltOWlh/aUk2VzF0N0luQmhk/R2dpT2lKY0wyWmNM/emxtTm1GbFl6TXhM/VEl3WlRndE5EVTBN/aTA1TnpKa0xXVmlO/R0l5T0RVellUaGxN/Rnd2Wkdkak9HWm9h/UzB6TnpJNU5URm1O/eTA1TjJJd0xUUTFZ/Mkl0WWpCa1l5MWhZ/MlEwWmpaak9ETmtN/RFV1YW5CbkluMWRY/U3dpWVhWa0lqcGJJ/blZ5YmpwelpYSjJh/V05sT21acGJHVXVa/RzkzYm14dllXUWlY/WDAudy1RVGktblZZ/QmhFWkpDUTdTSnFa/UmxMNnJ6YlVZZlFW/RUNPVDZ0dVU0UQ")';
    });

    // Alerta al enviar contrato
    enviarBtn.addEventListener('click', function (e) {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'El contrato ha sido enviado correctamente',
            confirmButtonColor: '#b19174'
        });
    });

    // Alerta al guardar modificación
    guardarBtn.addEventListener('click', function (e) {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: '¡Guardado!',
            text: 'Las modificaciones se han guardado exitosamente',
            confirmButtonColor: '#b19174'
        });
    });
});
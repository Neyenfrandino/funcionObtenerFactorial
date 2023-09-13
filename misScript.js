let resultado;
let btn = document.getElementById('btn');
let div = document.getElementById('div');

function obtenerNumeroFactorial() {
    let numeroUsuario = document.getElementById('numeroUsuario').value;
    let div = document.getElementById('div');

    console.log(numeroUsuario);

    // Limpiar contenido anterior
    div.innerHTML = '';

    if (numeroUsuario == 0 || numeroUsuario == 1) {
        console.log('El factorial de ' + numeroUsuario + ' es 1');
        let mostrarUsuario = document.createElement('p');
        mostrarUsuario.textContent = 'El factorial de ' + numeroUsuario + ' es 1';
        div.appendChild(mostrarUsuario);
    }

    if (numeroUsuario < 0) {
        console.log('De tu número no se puede obtener un factorial.');

        let mostrarUsuario = document.createElement('p');
        mostrarUsuario.textContent = 'De tu número no se puede obtener un factorial.';
        div.appendChild(mostrarUsuario);
    }

    if (numeroUsuario >= 2) {
        resultado = 1;

        for (let i = 1; i <= numeroUsuario; i++) {
            resultado *= i;
            console.log(resultado);
        }

        let mostrarResultado = document.createElement('p');
        mostrarResultado.textContent = 'El factorial de ' + numeroUsuario + ' es ' + resultado;
        div.appendChild(mostrarResultado);
    }
}

btn.addEventListener('click', obtenerNumeroFactorial);

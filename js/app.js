

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    alert("Un nuevo número magico ha sido generado para que lo encuentres!")
    numeroAEncontrar = randomNumber
}

function getText(e) {
    e.preventDefault();
    const input = document.querySelector('#busqueda');
    if (numeroAEncontrar == input.value) {
        alert("Ganaste!!");

    } else if (numeroAEncontrar < input.value) {
        alert("El número a adiviniar es mas chico")
    } else if (numeroAEncontrar > input.value) {
        alert("El número a adiviniar es mas grande")
    }

}

let numeroAEncontrar;
const btnRandomNumber = document.querySelector('#btn-starGame');
const formulario = document.querySelector('form');
formulario.addEventListener('submit', getText);
formulario.myParam = numeroAEncontrar;

btnRandomNumber.addEventListener('click', () => getRandomNumber());



function calculo() {

    const ticket = 200;
    let cantidad = document.getElementById('inputCity').value;
    let subtotal = cantidad * ticket
    let estudiante = 200 * cantidad - (subtotal * (80 / 100));
    let trainee = 200 * cantidad - (subtotal * (50 / 100));
    let junior = 200 * cantidad - (subtotal * (15 / 100));

    if (document.getElementById("inputState").value == document.getElementById("estudiante").value) {
        resultado.innerText = estudiante;
    } else if (document.getElementById("inputState").value == document.getElementById("trainee").value) {
        resultado.innerText = trainee;
    } else if (document.getElementById("inputState").value == document.getElementById("junior").value) {
        resultado.innerText = junior;
    }
}


function reseteo() {
    let resultado = document.getElementById("resultado");
    resultado.innerText = 0;
}

reseteo();
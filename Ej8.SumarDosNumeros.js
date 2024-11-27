const numero1 = Math.floor(Math.random() * 10) + 1;
const numero2 = Math.floor(Math.random() * 10) + 1;
const sumaCorrecta = numero1 + numero2;

let respuesta = parseInt(prompt(`¿Cuánto es ${numero1} + ${numero2}?`));

while (respuesta !== sumaCorrecta) {
    respuesta = parseInt(prompt("Incorrecto. Intenta de nuevo:"));
}

alert("¡Correcto!");

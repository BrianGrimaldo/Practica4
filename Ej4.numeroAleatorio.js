const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let intento = parseInt(prompt("Adivina un número entre 1 y 10:"));

while (intento !== numeroAleatorio) {
    intento = parseInt(prompt("Incorrecto. Intenta de nuevo:"));
}

alert("¡Correcto! Adivinaste el número.");

let producto = 1;
let numero = parseFloat(prompt("Ingresa un número positivo (o -1 para salir):"));

while (numero !== -1) {
    producto *= numero;
    numero = parseFloat(prompt("Ingresa otro número positivo (o -1 para salir):"));
}

alert(`El producto total es: ${producto}`);

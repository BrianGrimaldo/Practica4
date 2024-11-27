let numero = parseFloat(prompt("Ingresa un número positivo (o -1 para salir):"));

while (numero !== -1) {
    alert(`La raíz cuadrada de ${numero} es ${Math.sqrt(numero).toFixed(2)}`);
    numero = parseFloat(prompt("Ingresa otro número positivo (o -1 para salir):"));
}

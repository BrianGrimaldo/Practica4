let conteoPares = 0;
let entrada = prompt("Ingresa un número (o 'stop' para terminar):");

while (entrada.toLowerCase() !== 'stop') {
    const numero = parseInt(entrada);
    if (numero % 2 === 0) {
        alert("Par");
        conteoPares++;
    } else {
        alert("Impar");
    }
    entrada = prompt("Ingresa otro número (o 'stop' para terminar):");
}

alert(`Ingresaste ${conteoPares} números pares.`);

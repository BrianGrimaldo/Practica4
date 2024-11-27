const n = parseInt(prompt("Ingresa el valor de n:"));
let suma = 0;

for (let i = 1; i <= n; i++) {
    suma += 1 / i;
}

alert(`La suma de los recíprocos de los primeros ${n} números naturales es: ${suma.toFixed(2)}`);

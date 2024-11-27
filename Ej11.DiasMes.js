const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const mesIngresado = prompt("Ingresa el nombre de un mes:");
const indice = meses.indexOf(mesIngresado);

if (indice !== -1) {
    alert(`El mes de ${mesIngresado} tiene ${dias[indice]} días.`);
} else {
    alert("Mes no válido.");
}

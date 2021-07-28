const input = require("fs").readFileSync("stdin","utf8");
const lines = input.split('\n');

let numero = lines.shift();
let horas = lines.shift();
let valorHoras = lines.shift();
console.log("NUMBER = " + numero)
console.log("SALARY = U$ " + (horas*valorHoras).toFixed(2));
const input = require("fs").readFileSync("stdin","utf8");
const lines = input.split('\n');

let nome = lines.shift();
let salario = parseFloat(lines.shift());
let totalVendas = parseFloat(lines.shift());
let total = (salario + totalVendas*0.15);
console.log("TOTAL = R$ " + total.toFixed(2));
console.log("TOTAL = R$ 700.00");
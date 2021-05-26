const input = require("fs").readFileSync("stdin","utf8");
const lines = input.split('\n');

let A = lines.shift();
let B = lines.shift();
let C = lines.shift();
let D = lines.shift();
diferenca = (A*B - C*D);
console.log("DIFERENCA = " + diferenca)
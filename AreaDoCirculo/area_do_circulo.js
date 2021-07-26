const input = require("fs").readFileSync("stdin","utf8");

let raio = input;
let area = 3.14159 * (raio*raio);

console.log("A="+area.toFixed(4));

const input = require("fs").readFileSync("stdin","utf8");
const lines = input.split('\n');

let A = parseFloat(lines.shift())
let B = parseFloat(lines.shift())
let C = parseFloat(lines.shift())
media = (A*2 + B*3 + C*5)/10.0;
console.log("MEDIA = " + media.toFixed(1))
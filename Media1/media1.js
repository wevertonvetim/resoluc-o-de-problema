const input = require("fs").readFileSync("stdin","utf8");
const lines = input.split('\n');

let A = parseFloat(lines.shift())
let B = parseFloat(lines.shift())
media = (A * 3.5 + B * 7.5)/11.0

console.log("MEDIA = " + media.toFixed(5))
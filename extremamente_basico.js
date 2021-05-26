const input = require("fs").readFileSync("stdin","utf8");
let lines = input.split('\n');

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let X = A + B;
console.log("X = " + X);

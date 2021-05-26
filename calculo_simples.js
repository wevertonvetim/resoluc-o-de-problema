var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var lines2=lines[0].split(" ");
var lines3=lines[1].split(" ");

soma=parseFloat(lines2[1])*parseFloat(lines2[2])+parseFloat(lines3[1])*parseFloat(lines3[2]);
console.log("VALOR A PAGAR: R$ " + soma.toFixed(2));
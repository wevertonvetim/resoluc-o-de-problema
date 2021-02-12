let teclado = require('prompt-sync')();
let i = 's';
let soma=0;
while (i != 'n'){
    console.log('Numero: ')
    soma=soma+parseInt(teclado());
    i=teclado('Somar a outro numero? s/n ')
}
console.log('Resultado: ',soma)
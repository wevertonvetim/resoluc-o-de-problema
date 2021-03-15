//a sequencia comeca com 0 e 1, os proximos sao a soma dos dois anteriores 
// receber o tamanho da sequencia

function fibonacci(num){
    let sequencia=[0,1];
    for (i=2; i<num;i++){
        sequencia[i]=sequencia [i-1]+sequencia[i-2];
    }
    return sequencia;
}
console.log(fibonacci(15)) 
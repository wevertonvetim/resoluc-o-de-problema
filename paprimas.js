//identificar os valres de cada letra
//somar o valor da palavar
//verificar se é primo ou nao
    
const testCase=['peso','anilhia','abb','aa'];
function converteLetraEmNumero(palavra){
    let resultadoConversaoPalavra= 0
    for(let i=0;i<palavra.length;i++){
        resultadoConversaoPalavra +=  palavra[i].charCodeAt();
    }
    return resultadoConversaoPalavra;
}
function ePrimo(palavraconvertida){
    if(palavraconvertida%2==0 && palavraconvertida > 2){
        return false;
    }
    else{
        for(let i=2;i<=palavraconvertida/2;i++){
            if (palavraconvertida[i]%2==0){
                return false;
            }
        }
        return true;
    }
}
for (let i=0;i<testCase.length;i++){
    console.log(ePrimo(converteLetraEmNumero(testCase[i])));
}


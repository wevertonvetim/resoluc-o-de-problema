//identifico quais são as especies que estao repetidas 
//excluo do vetor
//exibo o tamanho do vetor que sobrou

const mDNA=['AAAA','BBB','AAAA','BBB','BBBB','CCCC','CCCC','AAA'];

function comparaTamanho(especie1, especie2){
    if((especie1.length)==(especie2.length)){
        return true;
    }
    return false;
}

function ehIgual(especie1,especie2){
    let base1=0;
    let base2=0;
    let vetorBase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];
    for(let j=0;j<vetorBase.length;j++){
        for(let k = 0; k <= especie1.length; k++){ //conta as letras que sao iguais da primeira especie comparada
            if(vetorBase[j]==especie1[k]){
                base1+=1;
            }
            if(vetorBase[j]==especie2[k]){
                base2+=1;
            } 
        }
        if(base1 != base2){
            return false;
        }else {
            base1 = 0;
            base2 = 0;
        }
    } 
    return true;   
}

function ComparaAsEspecies(especie1,especie2){
    if(comparaTamanho(especie1,especie2) && ehIgual(especie1,especie2)){
        return true
    }else{
        return false;
    }

}

function verificaEspecies(vetor){
    let especie1;
    let especie2;
    for (let i = 0; i < vetor.length; i++){
        especie1 = vetor[i];
        for(let j = i + 1; j < vetor.length; j++){
            especie2= vetor[j];
            if((ComparaAsEspecies(especie1,especie2))){ 
                vetor.splice(j, 1); //funcao que remove um item do vetor
                j--;
            }
        }
    }
    return vetor;
}

console.log(verificaEspecies(mDNA).length);

 
//identifico quais são as especies que estao repetidas 
//excluo do vetor
//exibo o tamanho do vetor que sobrou

let mDNA=['AAAA','BBB','AAA','BBB','CCCC','CCCC','AAA'];

function ComparaAsEspecies(especie1,especie2){
    let base1=0;
    let base2=0;
    let marcador=0;
    let vetorbase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];
    if((especie1.length)!=(especie2.length)){
        return false;
    }
    else{
        for (let k = 0; k<=especie1.length-1;k++){
            for(let l=0;l<15;l++){
                for(let m=0;m<=especie1.length-1;m++){ //conta as letras que sao iguais da primeira especie comparada
                    if(vetorbase[l]==especie1[m]){
                        base1+=1;
                    }
                    if(vetorbase[l]==especie2[m]){
                        base2+=1;
                    } 
                }
                if(base1!=base2){ //se encontrar uma expecie diferente altera o valor do marcador e reinicia a base.
                    l=15; //faz parar de rodas assim que encontra uma letra diferente
                    base1=0;
                    base2=0;
                    marcador += 1;
                }
            }    
        }
    }
    if(marcador==0){
        return true;
    }else{
        marcador=0;
        return false;
    }
}
let especie1=0;
let especie2=0;
let tamanhovetor=mDNA.length;
for (let i = 0;i<tamanhovetor;i++){
    especie1 = mDNA[i];
    for(let j = i+1;j<tamanhovetor;j++){
        especie2= mDNA[j];
        if((ComparaAsEspecies(especie1,especie2))){ 
            mDNA.splice(j, 1); //funcao que remove um item do vetor
            tamanhovetor -=1;
            j--;
        }
    }
}
console.log(mDNA.length);
 
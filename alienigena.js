let mDNA=['AAA','BBB','AAA','AAB','BBBA','ABBB','EFGHI','EFGHI'];
let tamanhovetor=mDNA.length;
let vetorbase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];
let palavra=0;
let palavra2=0;
let base1=0;
let base2=0;
let cont=0;
function compara(a,b){
    console.log('itens comparados: ',a,b)
    if((a.length)!=(b.length)){
        console.log('tamanhos diferentes');
        return false;
    }
    else{
        for (let k = 0; k<=a.length-1;k++){
            for(let l=0;l<15;l++){
                for(let m=0;m<=a.length-1;m++){
                    if(vetorbase[l]==a[m]){
                        base1=base1+1;
                    }
                }
                for(let n=0;n<=b.length-1;n++){
                    if(vetorbase[l]==b[n]){
                        base2=base2+1;
                    } 
                }
                if(base1!=base2){
                    l=l+palavra.length+1;
                    base1=0;
                    base2=0;
                    cont += 1;
                }
            }
        }
        console.log('contador: ',cont);
        if(cont==0){
            return true;
        }else{
            cont=0;
            return false;
        }
    }
}

for (let i = 0;i<tamanhovetor;i++){
    palavra = mDNA[i];
    for(let j = i+1;j<tamanhovetor;j++){
        palavra2= mDNA[j];
        if((compara(palavra,palavra2))){
            console.log('item retirado',mDNA[j]);
            mDNA.splice(j, 1);
            tamanhovetor -=1;
            j--;
            console.log('tamanho do vetor',tamanhovetor);
        }
    }
}

console.log('numero de especies: ',mDNA.length);
 
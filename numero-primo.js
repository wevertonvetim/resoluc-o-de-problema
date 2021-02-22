// Verifico se o numero é 2 ou se ele é par
// Verifico quantas vezes ele pode ser divido sem deixar resto.

let NumeroAnalizado = 10007;
function DoisOuPar(NumeroAnalizado){ //verifica se o numero é dois ou par.
    if(NumeroAnalizado==2){
    return true;
    }else if ((NumeroAnalizado%2)==0) {
    return false;
    }else{
    return NumeroAnalizado;
    }
}
if (DoisOuPar(NumeroAnalizado)==NumeroAnalizado){
    let i = 1;
    let TotalDeDivisor = 0;
    while(i<=(NumeroAnalizado/2)){
         if((NumeroAnalizado%i)==0){
            TotalDeDivisor++;
            i++;
         }else {
            i++;
         }
        }
    if(TotalDeDivisor>=3){
        NumeroAnalizado=false;  
    }else{
        NumeroAnalizado=true;
    }
    console.log(NumeroAnalizado);
}else{
    console.log(DoisOuPar(NumeroAnalizado));
}

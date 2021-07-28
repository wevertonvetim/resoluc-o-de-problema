// Verifico se o numero é 2 ou se ele é par
// Verifico quantas vezes ele pode ser divido sem deixar resto.

function ePrimo(palavraconvertida){
    if(palavraconvertida%2==0 && palavraconvertida > 2){
        return false;
    }
    else{
        for(let i=2;i<=palavraconvertida/2;i++){
            if (palavraconvertida%i==0){
                return false;
            }
        }
        return true;
    }
}

console.log(ePrimo(21));

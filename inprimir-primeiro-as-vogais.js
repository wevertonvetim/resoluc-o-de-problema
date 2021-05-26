const s = 'javascriptloops';
    
function separaVogais(){
    let string = [];
    let vogaisSeparadas=['a','e','i','o','u'];
    let vogais=[];
    for(let i = 0; i<s.length;i++){
        string.push(s[i]);
    }
    for(let i = 0; i<string.length;i++){
        for(let j = 0;j<vogaisSeparadas.length;j++){
            if(string[i]==vogaisSeparadas[j]){
                vogais.push(string[i]);
                string.splice(i,1);
                i--;
                break;
            }
        }
    }
    vogaisSeparadas = vogais.concat(string).join('');
    return vogaisSeparadas;
}

let palavraOrganizada = separaVogais();

for(let i = 0; i<palavraOrganizada.length;i++){
    console.log(palavraOrganizada[i]);
}
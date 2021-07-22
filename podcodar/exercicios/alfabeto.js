/*Neste exercício é necessário verificar se uma dada string contém as 26 letras do alfabeto.

Logo você deverá implementar a função verificaAlfabeto, que vai ter como entrada uma string de tamanho máximo de 100 letras e que deverá retornar como resposta um booleano true ou false, sendo:

true quando a string conter os 26 caracteres do alfabeto
false quando a string não conter os 26 caracteres do alfabeto*/

const testCase=['aaabcdefghijklmnopqrstuvwxyz','abcdefghijklmnopqrstvwxyz']
let map = {};
const verificarAlfabeto = (string)=>{
    let alfabeto = false;
    let cont = 0;
    for (let i = 0;i<string.length;i++){
        if(map[string[i]]===undefined){
            map[string[i]]=1;
            cont++;
        }
    }
    if(cont==26){
        alfabeto=true;
        map = {};
    }
    return alfabeto;
}
console.log(verificarAlfabeto(testCase[0]));
console.log(verificarAlfabeto(testCase[1]));
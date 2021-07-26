/*Neste exercício é necessário verificar se um texto recebido é um palíndromo ou seja, se este texto em formato de string possui a propriedade de poder ser lida tanto da direita para a esquerda como da esquerda para a direita.

Logo a sua função deverá retornar:

true quando a string for um palíndromo.
false quando a string não for um palíndromo.
Vamos exemplificar usando alguns casos de entrada*/

const testCase = ['ovo','nao é palindromo'];

const palindromo = (palavra)=>{
    let ePalindromo = false;
    normal = palavra;
    palavra = palavra.split('');
    palavra = palavra.reverse().join('');
    if(normal == palavra){
        ePalindromo = true;
    }
    return  ePalindromo;
}

console.log(palindromo(testCase[0]));
console.log(palindromo(testCase[1]));
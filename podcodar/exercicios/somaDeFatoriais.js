/*Neste exercício é necessário calcular o fatorial de dois números inteiros M (0 ≤ M ≤ 20) e N (0 ≤ N ≤ 20) e retornar a soma desses dois fatoriais.

Leia dois valores inteiros M e N indefinidamente. O seu programa deverá retornar o cálculo da soma dos fatoriais.

Logo, sua função deverá retornar:

Para cada caso de teste de entrada, seu programa deve imprimir uma única linha, contendo um número que é a soma de ambos os fatoriais (de M e N).
Exemplo:

O fatorial de um número inteiro e positivo “n”, representado por “n!” é obtido a partir da multiplicação de todos os seus antecessores até o número um, cuja expressão genérica é n! = n . (n – 1). (n – 2). (n – 3) ... 2,1

Portanto, fatorial de 2 corresponde a 2! (lê-se 2 fatorial), sendo assim 2! = 2 . 1 = 2.

Entrada (M = 2, N =2); Saída: 4 */

const testCase = [4,5]

const fatorial=(num)=>{
    let fatorial = 1;
    for(let i = num; i >1;i--){
        fatorial = fatorial*i;
    }
    return fatorial;
}
const somaFatorial=(num1,num2)=> {
    soma = fatorial(num1) + fatorial(num2);
    return soma;
}
 console.log(somaFatorial(5,4));



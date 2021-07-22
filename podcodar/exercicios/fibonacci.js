/*Neste exercício iremos calcular os valores da sequência de Fibonacci.

Na matemática, a Sequência de Fibonacci é uma sequência de números inteiros, começando normalmente por 0 e 1, na qual, cada termo subsequente corresponde à soma dos dois anteriores.

Os números de Fibonacci são, portanto, os números que compõem a seguinte sequência:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, ...*/

const testCase=[1,2,3,4,10];
let sequencia=[0,1];
const fibonacci = (num)=>{
    for (let i = 2;i<=num; i++){
        sequencia[i]= sequencia[i-1]+sequencia[i-2];
    }
    return sequencia[num];
}
console.log(fibonacci(testCase[0]));
console.log(fibonacci(testCase[1]));
console.log(fibonacci(testCase[2]));
console.log(fibonacci(testCase[3]));
console.log(fibonacci(testCase[4]));




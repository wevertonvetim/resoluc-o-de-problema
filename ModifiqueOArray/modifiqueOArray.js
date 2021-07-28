const testCase=[1,2,3,4,5,6];
let nuns = (num)=>{
    let arrayModificado = num.map(numero => {
        if(numero%2==0){
            return numero = numero*2;
        }else{
            return numero = numero*3;
        }
    });
    return arrayModificado;
}
console.log(nuns(testCase));
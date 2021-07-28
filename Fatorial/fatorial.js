/* let i = 6;
let fatorial = i;
while (i!=1) {
    fatorial = fatorial*(--i);
}
console.log('Fatorial: ',fatorial); */

function fatorial(num){
    if(num==1){return 1;}else{
        return num*fatorial(num-1);
    }
}
console.log(fatorial(7));
let num = 10007;
let i = 1;
let j = 0;
function triagem(num){
    if(num==2){
    return true;
    }else if ((num%2)==0) {
    return false;
    }else{
    return num;
    }
}
if (triagem(num)==num){
    while(i<=num && j!=3){
         if((num%i)==0){
            j++;
            i++;
         }else {
            i++;
         }
        }
    if(j==3){
        num=false;  
    }else{
        num=true;
    }
    console.log(num);
}else{
    console.log(triagem(num));
}

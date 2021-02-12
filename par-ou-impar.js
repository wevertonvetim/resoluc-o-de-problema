/*let jogadorquepediupar='jose';
let jogadorquepediuimpar='maria';

let jogadadoquepediupar= Math.floor(Math.random()*11);
let jogadadoquepediuimpar= Math.floor(Math.random()*11);

if((jogadadoquepediupar+jogadadoquepediuimpar)%2 !=0){
    console.log(jogadorquepediuimpar,'Ganhou !!');
}else{
    console.log(jogadorquepediupar,'Ganhou!!');
}*/
 
let jogadores=['maria','jose'] ;
let jogadas=[Math.floor(Math.random()*11),Math.floor(Math.random()*11)];
if(jogadas[0]+jogadas[1]%2 !=0){
    console.log(jogadores[0]);
}else{
    console.log(jogadores[1]);
}
    


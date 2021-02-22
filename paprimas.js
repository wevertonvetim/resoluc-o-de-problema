let palavra = 'aa'//'contest'//'UFRN' // 'AcM'
let soma=0;
for (let i = 0;i<=(palavra.length-1);i++){
    switch(palavra[i]){
        case 'a':
            soma=soma+1;
        break;
        case'A':
            soma=soma+27;
        break;
        case'b':
            soma=soma+2;
        break;
        case'B':
            soma=soma+28;
        break;
        case'c':
            soma=soma+3;
        break;
        case'C':
            soma=soma+29;
        break;
        case 'd':
            soma=soma+4;
        break;
        case 'D':
            soma=soma+30;
        break;
        case 'e':
            soma=soma+5;
        break;
        case 'E':
            soma=soma+31;
        break;
        case 'f':
            soma=soma+6;
        break;
        case 'F':
            soma=soma+32;
        break;
        case 'g':
            soma=soma+7;
        break;
        case 'G':
            soma=soma+33;
        break;
        case 'h':
            soma=soma+8;
        break;
        case 'H':
            soma=soma+34;
        break;
        case 'i':
            soma=soma+9;
        break;
        case 'I':
            soma=soma+35;
        break;
        case 'j':
            soma=soma+10;
        break;
        case 'J':
            soma=soma+36;
        break;
        case 'k':
            soma=soma+11;
        break;
        case 'K':
            soma=soma+37;
        break;
        case 'l':
            soma=soma+12;
        break;
        case 'L':
            soma=soma+38;
        break;
        case 'm':
            soma=soma+13;
        break;
        case 'M':
            soma=soma+39;
        break;
        case 'n':
            soma=soma+14;
        break;
        case 'N':
            soma=soma+40;
        break;
        case 'o':
            soma=soma+15;
        break;
        case 'O':
            soma=soma+41;
        break;
        case 'p':
            soma=soma+16;
        break;
        case 'P':
            soma=soma+42;
        break;
        case 'q':
            soma=soma+17;
        break;
        case 'Q':
            soma=soma+43;
        break;
        case 'r':
            soma=soma+18;
        break;
        case 'R':
            soma=soma+44;
        break;
        case 's':
            soma=soma+19;
        break;
        case 'S':
            soma=soma+45;
        break;
        case 't':
            soma=soma+20;
        break;
        case 'T':
            soma=soma+46;
        break;
        case 'u':
            soma=soma+21;
        break;
        case 'U':
            soma=soma+47;
        break;
        case 'v':
            soma=soma+22;
        break;
        case 'V':
            soma=soma+48;
        break;
        case 'w':
            soma=soma+23;
        break;
        case 'W':
            soma=soma+49;
        break;
        case 'x':
            soma=soma+24;
        break;
        case 'X':
            soma=soma+50;
        break;
        case 'y':
            soma=soma+25;
        break;
        case 'Y':
            soma=soma+51;
        break;
        case 'z':
            soma=soma+26;
        break;
        case 'Z':
            soma=soma+52;
        break;

        default:
            console.log('Nao é uma letra !');
    }
}

let NumeroAnalizado = soma;
let i = 1;
let j = 0;
function DoisOuPar(NumeroAnalizado){ //verifica se o numero é dois ou par.
    if(NumeroAnalizado==2){
    return true;
    }else if ((NumeroAnalizado%2)==0) {
    return false;
    }else{
    return NumeroAnalizado;
    }
}
if (DoisOuPar(NumeroAnalizado)==NumeroAnalizado){
    let i = 1;
    let TotalDeDivisor = 0;
    while(i<=(NumeroAnalizado/2)){
         if((NumeroAnalizado%i)==0){
            TotalDeDivisor++;
            i++;
         }else {
            i++;
         }
        }
    if(TotalDeDivisor>=3){
        NumeroAnalizado=false;  
    }else{
        NumeroAnalizado=true;
    }
    console.log(NumeroAnalizado);
}else{
    console.log(DoisOuPar(NumeroAnalizado));
}

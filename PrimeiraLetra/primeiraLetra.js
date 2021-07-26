const testCase = "vcde";
console.log(testCase.charAt(0));
function getLetter(s){
    let letter;
    switch(true){
        case 'aeiou'.includes(s.charAt(0)):
            letter = 'A';
            break;
        case 'bcdfg'.includes(s.charAt(0)):
            letter= 'B';
            break;
        case 'hjklm'.includes(s.charAt(0)):
            letter='C';
            break;
        case 'npqrstvwxyz'.includes(s.charAt(0)):
            letter='D';
            break;
        default:
            letter='não é uma vogal';
            break;
    }
    return letter;
}

console.log(getLetter(testCase))

let re = /^(a|e|i|o|u).*\1$/;

if (re.test('ieioiai')){
    console.log(true);
}else{
    console.log(false);
}


let re = /^(a|e|i|o|u).*\1$/;

if (re.test('ieioi')){
    console.log(true);
}else{
    console.log(false);
}

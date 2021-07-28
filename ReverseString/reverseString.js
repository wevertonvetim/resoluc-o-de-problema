let s = "12345";
function reverseString(s) {
    try {
        s = s.split("").reverse().join("");
    } catch(e) {
        console.log(e.message);
    } finally {
        console.log(s);
    }
}

console.log(reverseString(s));
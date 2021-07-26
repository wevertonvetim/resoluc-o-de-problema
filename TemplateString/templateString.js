const s1 = 10;
const s2 = 14;
const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2*(s1 + s2)}.`;

function sides(string, ...value){
    let a=value[0];
    console.log(string[0])
    let p=value[1];
    console.log(string[1]);
    let root = (Math.sqrt(p*p-16*a))
    let s1 = (p + root)/4;
    let s2 = (p - root)/4;

    return [s1,s2].sort();
}
console.log([x,y]);
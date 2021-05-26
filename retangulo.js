const testCase = [4,5]
function Rectangle(a, b) {

    this.length = a;
    this.width = b;
    this.perimeter = 2*(a+b)
    this.area = a*b;
}
let rec = new Rectangle(testCase[0],testCase[1]);
console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);
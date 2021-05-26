class Polygon{
    constructor(lados){
        this.lados = lados;
    }
    perimeter(){
        return this.lados.reduce((total,lados)=> total+lados);
    }
}
let triangulo = new Polygon([3,4,5]);
console.log(triangulo.perimeter());
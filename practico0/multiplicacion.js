//'use strict'
let a = process.argv[2];
let b = process.argv[3];
let c = process.argv[4];
function multiplicar(a,b,c){
    var resultado = a * b * c
    return resultado
}
console.log(multiplicar(a,b,c));
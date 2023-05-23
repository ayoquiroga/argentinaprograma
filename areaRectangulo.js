'use strict'
var base = process.argv[2];
var altura = process.argv[3];

function area(base,altura){
    var resultado = base * altura
    return resultado
}
//console.log(multiplica(2,17,6));
console.log(area(base,altura));
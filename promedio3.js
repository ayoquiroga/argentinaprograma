
let a = process.argv[2];
let b = process.argv[3];
let c = process.argv[4];
function promedio(a,b,c){
    var resultado = (Number(a) + Number(b) + Number(c)) / 3;
    return resultado
}
console.log(promedio(a,b,c));
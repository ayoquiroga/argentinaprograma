
let a = process.argv[2];
let b = process.argv[3];
let c = process.argv[4];
let d = process.argv[5];
let e = process.argv[6];
let f = process.argv[7];
function promedio(a,b,c){
    var resultado = (Number(a) + Number(b) + Number(c)+Number(d) + Number(e) + Number(f)) / 6;
    return resultado
}
console.log(promedio(a,b,c,d,e,f));
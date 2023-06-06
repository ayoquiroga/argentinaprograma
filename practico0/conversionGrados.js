'use strict'
const f = process.argv[2];

function convertirGrados(f){
    var celcius = (f-32) * (5/9);
    return celcius
}

console.log(convertirGrados(f));
'use strict'
const f = process.argv[2];

function convertirGradosDeFarenhietACelcius(f){
    var celcius = (f-32) * (5/9);
    return celcius
}

/*
function deCelciusAFarenheit(celcius){
    var celcius = (farenheit * (9/5))+32;
    return celcius;
}
*/

console.log(convertirGrados(f));
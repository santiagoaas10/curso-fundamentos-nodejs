global.mivariable = "el valor"

let i=0
let intervalo=setInterval(function(){
    if(i===3){
        clearInterval(intervalo)
    }
    i++;
    console.log('hola');
},1000);

/* setImmediate(function(){
    console.log('hola')
}) */

console.log(process)
console.log(__dirname)//directorio
console.log(__filename)//archivo

console.log(global.mivariable)
//benchmarking: herramientas para medir el tiempo de ejecucion de apartes y totalidades de nuestro código
//console.time para empezar el cronómetro
//console..time End para parar el cronómetro

function asincrona(){
    return new Promise((resolve)=>{
        setTimeout(function (){
            console.log('termina el proceso asincrono')
            resolve()
        })
    })
} 

console.time('todo')//empieza el cronometro
let suma=0;
console.time('bucle')//empieza el cronometro
 for(let i=0; i<1000000;i++){
    suma+=1; 
 } 
console.timeEnd('bucle')//acaba el cronometro

let suma2=0;
console.time('bucle2')//empieza el cronometro
 for(let j=0; j<1000000;j++){
    suma2+=1; 
 } 
console.timeEnd('bucle2')//acaba el cronometro
console.time('asincrono');
console.log('empieza el proceso asincrono')
asincrona()
 .then(() => {
    console.timeEnd('asincrono')
 })

console.timeEnd('todo')//acaba el cronometro
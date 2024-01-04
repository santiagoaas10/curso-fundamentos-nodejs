//parte1
/* //programa bacanisimo para manejar la consola con nodejs

//con esto puedo trerme por ejemplo un codigo en python o lo que sea y correrlo por debajo sin necesidad de migrarlo a node
const {exec} = require('child_process')
//const exec = require('child_process').exec, es como un importeme solo exce del modulo child process
exec('node modulos/globales.js',(err,stdout,stderr) =>
{
    if(err)
    {
        console.error(err)
        return false
    }
    console.log(stdout)
}
) */




/* //------parte2----------
//obtener información más compleja sobre un proceso
const {exec,spawn} = require('child_process')
let proceso=spawn('dir',['-la'])
console.log(proceso.pid)
console.log(proceso.connected)
proceso.stdout.on('data',function(dato){
    console.log(proceso.killed)
    console.log(dato.toString())
})

proceso.on('exit', function(){
    console.log('el proceso terminó')
    console.log(proceso.killed)
}) */
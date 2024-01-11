//const process = require('process');
//process viene dentro del módulo global


process.on('beforeExit', ()=>{
    console.log('el proceso va a terminar');
})

//el setTimeout no se verá, porque en la parte de proceso exit ya estamos desconectados del eventloop
process.on('exit', ()=>{
    console.log('ale, el proceso acabó');
    setTimeout( () => {
        console.log('esto no se a ver nunca')
    },1000);
})

process.on('uncaughtException', (err,origen) =>{
    console.error('hemos olvidado capturar un error')
    console.error(err)
});

//funcionquenoexiste();

console.log("esto si el error no se recoge, no sale")

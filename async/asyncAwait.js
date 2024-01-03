async function hola(nombre){
    return new Promise(function (resolve, reject){
        setTimeout(function () {
            console.log('hola, '+ nombre)
            resolve (nombre)
        }, 1500);
    });

}

async function hablar(nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log('blablabla...');
            resolve("error")
            //reject('hay un error')
        },1000)
        
});
}
async function adios(nombre){
    return new Promise((resolve,reject) => 
    {
        setTimeout(function()
        {
            console.log('adios',nombre)
            resolve(nombre);
         },1000);
    });
    
}
//si quitamos el await ponemos a la función a hacerse en segundo plano
async function main(){
    await hola("jose");
    await hablar()
    await hablar()
    let nombre= await hablar()
    await adios(nombre)
}

console.log('hola')
main()
console.log("esperando")
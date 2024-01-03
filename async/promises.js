function hola(nombre){
    return new Promise(function (resolve, reject){
        setTimeout(function () {
            console.log('hola, '+ nombre)
            resolve (nombre)
        }, 1500);
    });

}

function hablar(nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log('blablabla...');
            resolve(nombre)
            //reject('hay un error')
        },1000)
        
});
}
function adios(nombre){
    return new Promise((resolve,reject) => 
    {
        setTimeout(function()
        {
            console.log('adios',nombre)
            resolve(nombre);
         },1000);
    });
    
}


//....
console.log("iniciando el proceso para hola...")
hola("santi")
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log("terminado el proceso "+nombre)
    })
    .catch(error =>{
        console.error("ha habido un error");
        console.error(error)
    } )

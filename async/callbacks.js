//ejm1
/* function soyasincrona(micallback){
    setTimeout(function () {
        console.log('estoy siendo asincrona')
        micallback()
    }, 2000);
}

console.log('inciando proceso')
soyasincrona(function(){
    console.log('terminando proceso')
});
 */


function hola(nombre,micallback){
    setTimeout(function () {
        console.log('hola, '+ nombre)
        micallback()
    }, 2000);
}
function adios(nombre,otrocallback){
    setTimeout(function(){
        console.log('adios',nombre)
        otrocallback();
     },2000);
}

//este es un ejemplo demasiado poderoso de una función asíncrona que se ejecuta después de otra
//esto porque una está dentro de otra
console.log('inciando proceso')
hola("santi",function(){
    adios('santi', function(){
        console.log('terminando proceso..')
    });
    
});



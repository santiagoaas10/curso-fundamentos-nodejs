//un buffer es una cadenita de datos sin tipo de dato, es decir, cruda
//el que lo manda sabe qué manda y el que lo recibe sabe qué recibe


//creo buffer
//let buffer =Buffer.alloc(4);//creo un buffer de 4 espacio
let buffer =Buffer.from([1,2,3])//lleno buffer
console.log(buffer)

let buffer2 =Buffer.from('hola')
console.log(buffer2.toString()) //imprimalo sin el toString y verás....


//creo buffer de 26 posiciones (letras abecedario)
let abc= Buffer.alloc(26)
console.log(abc)

//a cada numerito le sumo 97 (código ASCII)
for(let i=0; i<26; i++){
    abc[i] = i + 97
}

//ME QUEGAN LAS LETRICAS DEL ABECEDARIO
console.log(abc.toString())

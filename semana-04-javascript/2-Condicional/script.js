"use strict"

const nombre = "Pepe";

let edad = 60;

if(edad <= 12){
    console.log(`${nombre} le corresponde el descuento infantil `);
}else if(edad >12 && edad<=30){
    console.log(`${nombre} le corresponde el descuento juvenil`);
}else if(edad >= 60){
    console.log(`${nombre} le corresponde el descuento de jubilados`);
}else{
    console.log(`${nombre} no le corresponde ningún descuento`);
};

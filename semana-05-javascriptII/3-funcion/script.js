"use strict";



const password =parseInt((Math.random())*100);

for (let i = 1; i<=5;i++){
   let numUser= parseInt(prompt("Introduce un numero del 0 al 100"));
if (numUser === password){
    alert("Has ganado");
}else if(numUser<password){
    alert("Es mayor");
}else if(numUser>password){
    alert("Es menor");
}
}



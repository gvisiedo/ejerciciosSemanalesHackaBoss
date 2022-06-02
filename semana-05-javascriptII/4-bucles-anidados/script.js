"use strict";

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
  
];

function nuevoCatalogo(){ 
  
  
  for(let i =0; i<catalogo.length;i++){
    for(let j=0; j<catalogo.length;j++){
      if(i !== j){
      console.log(catalogo[i]+ " y " + catalogo[j]);
        
      }
    }
    }
     
    }
nuevoCatalogo()
    
   
   



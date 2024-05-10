"use strict"

function convertor (){
    let a = prompt('Maoshingizni kiriting'),
        b = confirm('Soliq bilan hisoblansinmi?');

    const soliq = a * 0.1;
    const maosh = a - soliq;

    if(b === true){
       console.log( maosh * 12);
    }else{
        console.log(a * 12);
    }

    
}

convertor();



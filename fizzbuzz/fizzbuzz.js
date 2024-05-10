'use strict'

const  jsForm = document.querySelector('.js-form'),
        inputNumber = jsForm.querySelector('.number'),
        natija = jsForm.querySelector('.natija');


function checkFizzBuzz(){
    let userNumber = Number(inputNumber.value);
    
    // 1-usul

    // if(userNumber % 3 === 0 && userNumber % 5 === 0){
    //     natija.textContent = 'FizzBuzz'
    // }else if(userNumber % 3 === 0){
    //     natija.textContent = 'Fizz'
    // }else if(userNumber % 5 === 0){
    //     natija.textContent = 'Buzz'
    // }else{
    //     natija.textContent = userNumber;
    // }

    // 2-usul
    debugger;
    let result = '';
    if(userNumber % 3 === 0) result += 'Fizz'
    if(userNumber % 5 === 0) result += 'Buzz'
    natija.textContent = result || userNumber;
}

if(jsForm){
    jsForm.addEventListener('submit',(e)=>{
        e.preventDefault();

        checkFizzBuzz();

    })
}
let MIN = 1;
let MAX = 10;
let RUNDOM_NUMBER =  Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
let MAX_ATTEMPTS = 6;

let = remeningAttempts = MAX_ATTEMPTS;

const  jsFindNumberForm = document.querySelector('.js-find-number-form'),
        inputNumber = jsFindNumberForm.querySelector('.find-number'),
        natija = jsFindNumberForm.querySelector('.natija'),
        atteptsText = jsFindNumberForm.querySelector('.js-attempts-text'),
        alertBlock = jsFindNumberForm.querySelector('.alert-block');

        
function checkNumber(){
    remeningAttempts--;
    atteptsText.textContent = remeningAttempts;

    let userNumber = Number(inputNumber.value);

    if(userNumber < RUNDOM_NUMBER){
        alertBlock.classList.add('alert', 'alert-primary');
        alertBlock.textContent = "Kiritilgan son X dan kichik"
    }else if(userNumber > RUNDOM_NUMBER){
        alertBlock.classList.add('alert', 'alert-warning');
        alertBlock.textContent = "Kiritilgan son X dan katta"
    }else{
        alertBlock.classList.remove('alert-warning');
        alertBlock.classList.add('alert','alert-success');
        alertBlock.textContent = "Toptiz,toptiz"
    }

    if(remeningAttempts === 0){
        inputNumber.disabled = true;
        jsFindNumberForm.querySelector('button').disabled = true;
    }
}

 jsFindNumberForm.addEventListener('submit',(evt=>{
    evt.preventDefault();
    checkNumber();
 }))

//  let checkInput = document.createElement('span');
//  checkInput.classList.add('p-2','rounded' , 'bg-success', 'text-white','m-3');
//  checkInput.textContent = Number(inputNumber.value);
//  document.body.append(checkInput)
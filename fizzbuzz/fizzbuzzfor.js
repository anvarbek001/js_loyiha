const jsForm = document.querySelector('.js-form ');
const jsInput = jsForm.querySelector('.js-input ');
const jsFizzList = jsForm.querySelector('.js-fizz-list');
const jsBuzzList = jsForm.querySelector('.js-buzz-list');
const jsFizzBuzzList = jsForm.querySelector('.js-fizzbuzz-list');
const jsClearButton = jsForm.querySelector('.js-clear-button');
let elJsFizzResult = document.querySelector('.js-fizz-result');
let elJsBuzzResult = document.querySelector('.js-buzz-result');
let elJsFizzBuzzResult = document.querySelector('.js-fizzbuzz-result');

jsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let userNumber = Number(jsInput.value)
    let fizzMassiv = [];
    let buzzMassiv = [];
    let fizzBuzzMassiv = []; 
    
    for(let i = 1; i <= userNumber;i++){
        if(i % 15 === 0){
            fizzBuzzMassiv.push(i);
            // let fizzBuzz = i;
            // fizzBuzzMassiv = fizzBuzz;
            // fizzBuzzMassiv.toString();
            // let elNewLi = document.createElement('li')
            // elNewLi.textContent = fizzBuzzMassiv;
            // jsFizzBuzzList.append(elNewLi);
        }else if(i % 3 === 0){
            fizzMassiv.push(i);
            // let fizz = i;
            // fizzMassiv = fizz;
            // let elNextLi = document.createElement('li');
            // elNextLi.textContent = fizzMassiv;
            // jsFizzList.append(elNextLi);
        }else if(i % 5 === 0){
            buzzMassiv.push(i);
            // let buzz = i;
            // buzzMassiv = buzz;
            // let elEndLi = document.createElement('li');
            // elEndLi.textContent = buzzMassiv;
            // jsBuzzList.append(elEndLi);
        }

        // Har bir arrayda nechta qiymat borligini ko'rsatamiz
        elJsFizzResult.textContent = fizzMassiv.length
        elJsBuzzResult.textContent = buzzMassiv.length
        elJsFizzBuzzResult.textContent = fizzBuzzMassiv.length

        // Sonlarni Massinvning matnida ciqarish
        jsFizzList.textContent = fizzMassiv.join(', ');
        jsBuzzList.textContent = buzzMassiv.join(', ');
        jsFizzBuzzList.textContent = fizzBuzzMassiv.join(', ');
    }
})

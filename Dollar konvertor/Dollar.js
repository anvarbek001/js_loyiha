"use strict"

const jsForm = document.querySelector('.js-form'),
        summaInput = jsForm.querySelector('.summa-input'),
        jsValyutaSelect = jsForm.querySelector('.js-valyuta-select'),
        dollarNarija = jsForm.querySelector('.dollar-natija');


jsForm.addEventListener('submit',(e)=>{
        e.preventDefault();

        const natija = Number(summaInput.value) * Number(jsValyutaSelect.value);
        dollarNarija.textContent = natija.toFixed(2);
})
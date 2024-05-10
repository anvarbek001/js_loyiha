
let productListMassiv = [];

let elJsForm = document.querySelector('.js-form'),
    elJsProductNameInput = elJsForm.querySelector('.js-product-name-input'),
    elAddButton = elJsForm.querySelector('.js-add-button'),
    elClearButton = elJsForm.querySelector('.js-clear-button');
let productsList = document.querySelector('.products-list');
let jsClearButton = document.querySelector('.js-clear-button');

elJsForm.addEventListener('submit' , (evt) => {
    evt.preventDefault();

    let productName = elJsProductNameInput.value.trim().toLowerCase();

    if(!productListMassiv.includes(productName)){
        productListMassiv.push(productName);
    }

    productsList.innerHTML = '';

    let elDocumentFragment = document.createDocumentFragment();
    for(let product of productListMassiv){
        let elNewLi = document.createElement('li');
        elNewLi.textContent = product;
        elDocumentFragment.append(elNewLi);
    }

    productsList.append(elDocumentFragment);

    elJsProductNameInput.value = '';
})

jsClearButton.addEventListener('click',() => {
    productListMassiv = [];
    productsList.innerHTML = '';
})
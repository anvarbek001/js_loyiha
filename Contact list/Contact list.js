let contacts = [];


let jsContactNumber = jsContactForm.querySelector('.js-contact-number')

let elContacts = document.querySelector('.contacts')
let elContactsList = document.querySelector('.contacts__list')

let elContactListItemTemplate = document.querySelector('#contact-list-item-template').content;

function addContacts(name,relationship,phone){
    contacts.push({
        name:name,
        relationship:relationship,
        phone:phone,
    })
}

function inputRefresh(){
    jsContactInput.value = '';
    jsContactRelationship.value = '';
    jsContactNumber.value = '';
}

function showContact(){
    elContacts.innerHTML = '';
    let elContactsFragment = document.createDocumentFragment();

    for(let contact of contacts){

        let elNewContactListItem = elContactListItemTemplate.cloneNode(true);
        elNewContactListItem.querySelector('.contact__name').textContent = contact.name;
        elNewContactListItem.querySelector('.contact__relationship').textContent = contact.relationship;
        elNewContactListItem.querySelector('.contact__phone-link').textContent = contact.phone;
        elNewContactListItem.querySelector('.contact__phone-link').href = `Tel: ${contact.phone}`;
        
        elContactsFragment.append(elNewContactListItem); 
    }
    elContacts.append(elContactsFragment);
}

if(jsContactForm){
    jsContactForm.addEventListener('submit',(evt) => {
        evt.preventDefault();
        let jsContactForm = document.querySelector('.js-contact-form')
        let jsContactInput = jsContactForm.querySelector('.js-contact-input')
        let jsContactRelationship = jsContactForm.querySelector('.js-contact-relationship')

        let jsContactNumberError = document.querySelector('.js-contact-number-error')
        let qayerdaTuripti = contacts.findIndex(function (contact){
            return contact.phone = jsContactNumber.value.trim();
        })

        if(qayerdaTuripti > -1){
            jsContactNumber.classList.add('is-invalid');
            jsContactNumberError.textContent = "Bu kontakt mavjud!"
            jsContactNumberError.style.color = 'red'
            return;
        }

        addContacts(
            jsContactInput.value.trim(),
            jsContactRelationship.value.trim(),
            jsContactNumber.value.trim()
        );
        
        inputRefresh();

        showContact();
            
    })
}


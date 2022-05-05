const button = document.querySelector('.btn');
const inputs = document.querySelectorAll('.field');

//regexp to validate e-mail
const regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//show validator messages 
const notValid = (input)=>{
    const el = document.querySelector(`[data-id="${input.name}"]`);
    input.nextSibling.nextSibling.classList.remove('hidden');            
    el.classList.remove('hidden');
}
//hides validator messages
const valid = (input) => {
    document.querySelector(`[data-id="${input.name}"]`).classList.add('hidden');
    input.nextSibling.nextSibling.classList.add('hidden');            
}

// show and customize e-mail validator message
const notValidMail = (input) => {
    let el = document.querySelector(`[data-id="${input.name}"]`);
    el.classList.remove('hidden');
    el.innerHTML = 'Looks like this is not an email';

}
// hide validators and error icons
const reset = () =>{
    inputs.forEach(input => {
        valid(input);
    })
}
// validate input fields
const checkInputs = () => {
    //firstly reset back to original state
    reset();
    // validate all inputs
    inputs.forEach(input=>{
        if (input.value === ''){                        
            notValid(input);
        }
        // special case when it's an email
        if (input.name === 'email' && input.value !=='')
            checkValidMail(input);
    })
}
// check whether email is a valid email
const checkValidMail = input => {
    const mail = input.value;
    if (regExp.test(mail)){
        valid(input);
    }
    else {
        notValidMail(input);
    }
}

//listen to click event
button.addEventListener('click',(e)=>{
    e.preventDefault();
    checkInputs();
})
// listen to input event on every input field
inputs.forEach(input=>{
    input.addEventListener('input', ()=> valid(input))
})
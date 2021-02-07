let form = document.querySelector("#form");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");


//show the error message
function showError(input, message) {
    //outline input with red
    let formControl = input.parentElement;
    formControl.className = 'form-control error';
    let small = formControl.querySelector('small');
    small.innerText = message;
}

//show success 
function showSuccess(input) {
    //outline input with red
    let formControl = input.parentElement;
    formControl.className = 'form-control sucess';

}


function submitForm(event) {
    event.preventDefault();
    // console.log(username.value);

    if (username.value === '') {
        showError(username, 'Username is required');

    } else {
        showSuccess(username);
    }
    if (email.value === '') {
        showError(email, 'Email is required');

    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'password is required');

    } else {
        showSuccess(password);
    }

    if (password2.value === '') {
        showError(password2, 'Password is required');

    } else {
        showSuccess(password2);
    }
}


//event listeners
form.addEventListener("submit", submitForm);
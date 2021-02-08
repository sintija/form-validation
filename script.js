let form = document.querySelector("#form");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");


//check if email is valid
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.value.trim())) {
        showSuccess(email);
    } else {
        showError(email, 'Email is not valid');
    }

}

//check if the passwords match 
function checkPasswordMatch(input1, input2) {
    if (input1.value === input2.value) {
        showSuccess(input);
    } else {
        showError(input2, "Passwords do not match");
    }
}



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


//check required fields 
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} required`);
        } else {
            showSuccess(input);
        }
    });

}

//get field name and capitalize the first letter 

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}


function submitForm(event) {
    event.preventDefault();
    // console.log(username.value);
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    validateEmail(email);
    checkPasswordMatch(password, password2);


}


//event listeners
form.addEventListener("submit", submitForm);
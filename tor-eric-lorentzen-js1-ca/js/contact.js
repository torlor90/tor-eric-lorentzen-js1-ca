const contactForm = document.querySelector("#contactForm");

const submittedForm = document.querySelector(".success");

contactForm.addEventListener("submit", validateEntry);

function validateEntry(event) {
    event.preventDefault();


//name
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const nameValue = name.value.trim();
let validName = false;

if (checkInput(nameValue, 1) === true) {
    nameError.style.display = "none";
    validName = true;
} else {
    nameError.style.display = "block";
    validName = false;
} 

//answer
const answer = document.querySelector("#answer");
const answerError = document.querySelector("#answerError");
const answerValue = answer.value.trim();
let validAnswer = false;

if (checkInput(answerValue, 10) === true) {
    answerError.style.display = "none";
    validAnswer = true;
} else {
    answerError.style.display = "block";
    validAnswer = false;
}


//email
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const invalidEmailError = document.querySelector("#invalidEmailError");
const emailValue = email.value.trim();
let validEmail = false;

if (emailValue) {
    emailError.style.display = "none";
    validEmail = true;
} else {
    emailError.style.display = "block";
    validEmail = false;
}

if (checkEmail(emailValue) === true) {
    invalidEmailError.style.display = "none";
    validEmail = true;
} else {
    invalidEmailError.style.display = "block";
    validEmail = false;
}

//address
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const addressValue = address.value.trim();
let validAddress = false;

if (checkInput(addressValue, 15) === true) {
    addressError.style.display = "none";
    validAddress = true;
} else {
    addressError.style.display = "block";
    validAddress = false;
}


if (validName === true &&
    validAnswer === true &&
    validEmail === true &&
    validAddress === true
    ) {
    submittedForm.style.display = "block";
    contactForm.style.deiplay = "none";
} else {
    submittedForm.style.display = "none";
    contactForm.style.display = "block";
}

}


    function checkInput(value, length) {
        const trimmedValue = value.trim();
    
        if (trimmedValue.length >= length) {
            return true;
        } else {
            return false;
        }   
    }

    function checkEmail(emailTest) {
        const symbols = /\S+@\S+\.\S+/;

        if (symbols.test(emailTest)) {
            return true;
          } else {
            return false;
          }
    } 
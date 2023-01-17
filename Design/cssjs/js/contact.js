const $form = document.querySelector(".js-form");
const $name = document.querySelector(".js-form_name");
const $phone = document.querySelector(".js-form_phone");
const $email = document.querySelector(".js-form_email");
const $message = document.querySelector(".js-form_message");
const $city = document.querySelector(".js-form_city")

const isEmail = (email) => {
    return /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/.test(
        email
    );
}
const findError = ($input, errorMessage) =>{
    $input.parentNode.classList.add(".form-field_error");
    $input.nextElementSibling.innerText = errorMessage;
}
const deleteError = ($input) =>{
    $input.parentNode.classList.remove(".form-field_error");
    $input.nextElementSibling.innerText = "";
}

const validate = () => {
    const nameval = $name.value.trim();
    const phoneval = $phone.value.trim();
    const emailval = $email.value.trim();
    const messageval = $message.value.trim();
    const cityval = $city.value.trim();

    deleteError($city);
    deleteError($email);
    deleteError($message);
    deleteError($name);
    deleteError($phone);
    
    if (!nameval){
        findError($name, "name can't be empty");
    }
    if (!phoneval){
        findError($phone, "phone space can't be empty");
    }
    if (!emailval){
        findError($email, "email space can't be empty");
    } else if (isEmail(emailval)) {
        findError($email, "the email is not valid");
    }
    if (!cityval){
        findError($city, "city can't be empty");
    }
    if (!messageval){
        findError($message, "please first write some message");
    }
}

$form.addEventListener("submit", (event) => {
    event.preventDefault();

    validate();

});


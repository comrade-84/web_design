const us_na = document.getElementById('username');
const us_em = document.getElementById('email');
const us_pa = document.getElementById('password');
const co_pa = document.getElementById('confirm_password');
const err_mess = document.getElementById('err_1');
const err_mess_1 = document.getElementById('err_2');
const err_mess_2 = document.getElementById('err_3');
const err_mess_3 = document.getElementById('err_4');
const sub_btn = document.getElementById('btn');
err_mess_2.style.color = 'green';

const input_checker = function () {
    let isValid = true;

    // Username validation
    if (!us_na.value) {
        err_mess.innerHTML = "Fill this field";
        isValid = false;
    } else {
        err_mess.innerHTML = "";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    if (!us_em.value) {
        err_mess_1.innerHTML = "Fill this field";
        isValid = false;
    } else if (!emailRegex.test(us_em.value)) {
        err_mess_1.innerHTML = "Enter a valid email address";
        isValid = false;
    } else {
        err_mess_1.innerHTML = "";
    }

    // Password validation
    if (!us_pa.value) {
        err_mess_2.innerHTML = "Fill this field";
        err_mess_2.style.color = 'red';
        isValid = false;
    } else if (us_pa.value.length < 8) {
        err_mess_2.innerHTML = "Password is not up to 8 characters";
        err_mess_2.style.color = 'red';
        isValid = false;
    } else {
        strength_checker();
    }

    // Confirm password validation
    if (!co_pa.value) {
        err_mess_3.innerHTML = "Fill this field";
        isValid = false;
    } else if (co_pa.value !== us_pa.value) {
        err_mess_3.innerHTML = "Passwords do not match";
        isValid = false;
    } else {
        err_mess_3.innerHTML = "";
    }

    return isValid;
};

const strength_checker = function () {
    const hasUpperCase = /[A-Z]/.test(us_pa.value);
    const hasSpecialChar = /[,!%&^*_.]/.test(us_pa.value);
    const hasNumber = /[0-9]/.test(us_pa.value);

    if (!hasSpecialChar || !hasUpperCase || !hasNumber) {
        err_mess_2.style.color = 'red';
        err_mess_2.innerHTML = "Password must contain at least an uppercase letter, a special character, and a number";
    } else {
        err_mess_2.style.color = 'green';
        err_mess_2.innerHTML = "Password is strong enough";
    }
};

sub_btn.addEventListener('click', function () {
    if (input_checker()) {
        alert("Form submitted successfully!");
        us_em.value = '';
        us_na.value = '';
        us_pa.value = '';
        co_pa.value = '';
    }
});
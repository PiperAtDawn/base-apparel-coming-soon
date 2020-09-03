const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorPopups = document.getElementsByClassName("error");

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function errorVisibility($mode) {
    for (let i = 0; i < errorPopups.length; i++) {
        errorPopups[i].style.visibility=$mode;
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();

    if (!validateEmail(emailInput.value)) {
        errorVisibility("Visible");
    }
    else {
        errorVisibility("Hidden");
    }
})
/*
form.addEventListener('touchend', e =>{
    e.preventDefault();

    if (!validateEmail(emailInput.value)) {
        errorVisibility("Visible");
    }
    else {
        errorVisibility("Hidden");
    }
})*/
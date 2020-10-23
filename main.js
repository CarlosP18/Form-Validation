let cardNumber = document.querySelector("#cardNumber")
let cvc = document.querySelector("#cvc")
let amount = document.querySelector("#amount")
let firstname = document.querySelector("#firstname")
let lastname = document.querySelector("#lastname")
let city = document.querySelector("#city");
let state = document.querySelector("#state")
let postalCode = document.querySelector("#postalCode")
let msg = document.querySelector("#msg")
let msgAlert = document.querySelector(".alert")

let form = document.querySelector("form");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (cardNumber.value === "") {
        msgAlert.classList.remove("d-none")
        cardNumber.classList.add("is-invalid")
    } else {
        msgAlert.classList.add("d-none")
        cardNumber.classList.remove("is-invalid")
        cardNumber.classList.add("is-valid")
    }

    if (cvc.value === "") {
        msgAlert.classList.remove("d-none")
        cvc.classList.add("is-invalid")
    } else {
        msgAlert.classList.add("d-none")
        cvc.classList.remove("is-invalid")
        cvc.classList.add("is-valid")
    }

    if (amount.value === "") {
        msgAlert.classList.remove("d-none")
        amount.classList.add("is-invalid")
    } else {
        msgAlert.classList.add("d-none")
        amount.classList.remove("is-invalid")
        amount.classList.add("is-valid")
    }

    if (firstname.value === "") {
        msgAlert.classList.remove("d-none")
        firstname.classList.add("is-invalid")
    } else {
        msgAlert.classList.add("d-none")
        firstname.classList.remove("is-invalid")
        firstname.classList.add("is-valid")
    }

    if (lastname.value === "") {
        msgAlert.classList.remove("d-none")
        lastname.classList.add("is-invalid")
    } else {
        msgAlert.classList.add("d-none")
        lastname.classList.remove("is-invalid")
        lastname.classList.add("is-valid")
    }

    if (city.value === "") {
        msgAlert.classList.remove("d-none")
        city.classList.add("is-invalid")
    } else {
        msgAlert.classList.add("d-none")
        city.classList.remove("is-invalid")
        city.classList.add("is-valid")
    }

    if (state.value === "Pick State") {
        msgAlert.classList.remove("d-none")
        state.classList.add("is-invalid")
    } else {
        msgAlert.classList.add("d-none")
        state.classList.remove("is-invalid")
        state.classList.add("is-valid")
    }

    if (postalCode.value === "") {
        msgAlert.classList.remove("d-none")
        postalCode.classList.add("is-invalid")
    } else {
        msgAlert.classList.add("d-none")
        postalCode.classList.remove("is-invalid")
        postalCode.classList.add("is-valid")
    }

    if (msg.value === "") {
        msgAlert.classList.remove("d-none")
        msg.classList.add("is-invalid")
    } else {
        msgAlert.classList.add("d-none")
        msg.classList.remove("is-invalid")
        msg.classList.add("is-valid")
    }

    if (cardNumber.value !== ""
        && cvc.value !== ""
        && amount.value !== ""
        && firstname.value !== ""
        && lastname.value !== ""
        && city.value !== ""
        && state.value !== "Pick State"
        && postalCode.value !== ""
        && msg.value !== "") {
        form.submit()
    }


})


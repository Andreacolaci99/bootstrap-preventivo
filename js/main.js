let selectInput = document.querySelector(`#workType`);
const submitButton = document.querySelector(`#button`);
const finalPriceContainer = document.querySelector(`#finalPriceContainer`);
const nameInput = document.querySelector(`#validationCustom01`);
const surnameInput = document.querySelector(`#validationCustom02`);
const emailInput = document.querySelector(`#exampleInputEmail1`);
const privacyCheckbox = document.querySelector(`#exampleCheck1`);
const discountCode = ["YHDNU32","JANJC63","PWKCN25","SJDPO96","POCIE24"];

submitButton.addEventListener(`click`, function (event) {
    event.preventDefault();

    // Flag per validazione
    let isValid = true;

    // Validazione campi Nome, Cognome ed Email
    if (nameInput.value.trim() === "") {
        alert("Il campo Nome è obbligatorio.");
        isValid = false;
    }

    if (surnameInput.value.trim() === "") {
        alert("Il campo Cognome è obbligatorio.");
        isValid = false;
    }

    if (emailInput.value.trim() === "") {
        alert("Il campo Email è obbligatorio.");
        isValid = false;
    } else if (!validateEmail(emailInput.value)) {
        alert("Inserisci un'email valida.");
        isValid = false;
    }

        // Validazione Select Tipo di lavoro
        let selectInputValue = selectInput.value;
        if (selectInputValue === "") {
            alert("Selezionare il tipo di lavoro.");
            isValid = false;
        }
    
    // Validazione Privacy Policy
    if (!privacyCheckbox.checked) {
        alert("Devi accettare la Privacy Policy.");
        isValid = false;
    }

    // Se ci sono errori, interrompi l'esecuzione
    if (!isValid) {
        return;
    }


    let finalPrice = 10;
    if (selectInputValue === "1") {
        finalPrice *= 15.3;
    } else if (selectInputValue === "2") {
        finalPrice *= 20.5;
    } else if (selectInputValue === "3") {
        finalPrice *= 33.6;
    }

    const promoCodeInput = document.querySelector("#promo-code").value.trim(); 
    
    if (promoCodeInput === "") {

        alert("Non hai inserito alcun codice promozionale.");

    } else if (discountCode.includes(promoCodeInput)) {

        finalPrice *= 0.75;

        alert("Hai diritto ad un codice sconto del 25% sul prezzo finale.");

    } else {

        alert("Il codice promozionale inserito non è valido.");
    }

    finalPriceContainer.innerHTML = `PREZZO FINALE: ${finalPrice.toFixed(2)}€`;
});


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

}

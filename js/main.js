let selectInput = document.querySelector(`#workType`)
const submitButton = document.querySelector(`#button`)
const finalPriceContainer = document.querySelector(`#finalPriceContainer`)

submitButton.addEventListener(`click`, function(event) {
    event.preventDefault()

   let finalPrice = 10;
   let selectInputValue = selectInput.value
   console.log(selectInputValue)

    if(selectInputValue === "1"){
 
        finalPrice *= 15.30;

    }else if(selectInputValue === "2"){

        finalPrice *= 20.50;

    }else if(selectInputValue === "3"){

        finalPrice *= 33.60;

    }else{

       alert(`Selezionare tipo di lavoro`);
       return;

    }
    console.log(finalPrice)
    finalPriceContainer.innerHTML = `PREZZO FINALE ${finalPrice.toFixed(2)}€`
})
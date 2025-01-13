let selectInput = document.querySelector(`#workType`)
const submitButton = document.querySelector(`#button`)
let frontend = 15.30;
let backend = 20.50;
let analyses = 33.60;

submitButton.addEventListener(`click`, function(event) {
    event.preventDefault()

    if(selectInput.value === 1){
 
        let frontend = frontend * 10;

    }else if(selectInput.value === 2){

        let backend = backend * 10;

    }else if(selectInput.value === 3){

        let analyses = analyses * 10;

    }else{

        alert(`Selezionare tipo di lavoro`);

    }
    console.log(selectInput)
    finalPriceContainer.innerHtml = `PREZZO FINALE ${selectInput}€`
})
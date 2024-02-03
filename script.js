let input = document.querySelector("#input")

function updateDisplay(value){
    input.value += value;
}

function clearDisplay(){
    input.value = "";
    input.focus()
}

function calculateResult(){
    let result = eval(input.value)
    input.value = (result !== undefined && !isNaN(result) ? result : "Error")
}

function deleteDisplay(){
    input.value = input.value.slice(0,-1)
}
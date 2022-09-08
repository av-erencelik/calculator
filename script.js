let firstNumber = ""
let secondNumber = ""
let operator = null
let refreshScreen = false

const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const equalButton = document.querySelector(".equal")
const pointButton = document.querySelector(".point")
const clearButton = document.getElementById("clear")
const deleteButton = document.getElementById("delete")
const lastOperationScreen = document.getElementById("lastOperation")
const currentOperationScreen = document.getElementById("currentOperation")

clearButton.addEventListener("click",clear)
pointButton.addEventListener("click",addPoint)
deleteButton.addEventListener("click",deleteNumber)
numberButtons.forEach((button) => 
    button.addEventListener("click", () => addNumber(button.textContent))
);
operatorButtons.forEach((button) => 
    button.addEventListener("click", () => addOperator(button.textContent))
);
equalButton.addEventListener("click", equals)








function deleteNumber() {
    currentOperationScreen.textContent = currentOperationScreen.textContent.slice(0,-1)
}
function equals() {
    if(firstNumber != "" && operator != null && refreshScreen==false) {
        secondNumber = currentOperationScreen.textContent
    }else return
    let result = operate(firstNumber,secondNumber,operator)
    refreshScreen = true
    lastOperationScreen.textContent = `${firstNumber} ${operator} ${secondNumber} = `
    firstNumber = result
    secondNumber = ""
    currentOperationScreen.textContent = firstNumber
}

function clear() {
    currentOperationScreen.textContent = "0"
    lastOperationScreen.textContent = ""
    firstNumber = ""
    secondNumber = ""
    operator = null
}

function addPoint() {
    if (currentOperationScreen.textContent.includes(".")) {return}
    else currentOperationScreen.textContent += "."
}

function addNumber(a) {
    // if (firstNumber != "") {
    //     secondNumber = a
    // }else {
    //     firstNumber = a
    // }
    refreshScreen = false
    if (firstNumber == currentOperationScreen.textContent) {
        currentOperationScreen.textContent = a
        return
    }
    if (currentOperationScreen.textContent === "0" && operator == null) {
        currentOperationScreen.textContent = a
    }else {
        currentOperationScreen.textContent += a
    }
    
}
function addOperator(a) {
    if (firstNumber != "" && refreshScreen == false) {
        secondNumber = currentOperationScreen.textContent
    }else {
        firstNumber = currentOperationScreen.textContent
    }
    if (firstNumber != "" && secondNumber != "" && operator != null) {
        firstNumber = operate(firstNumber,secondNumber,operator)
        secondNumber = ""
        currentOperationScreen.textContent = firstNumber
        operator = a
        refreshScreen = true
    }else {
        operator = a
        refreshScreen = true
    }
    lastOperationScreen.textContent = `${firstNumber} ${operator}`
}


function operate(a,b,c) {
    switch (c) {
        case "+" :
            return add(a,b)
        case "-" :
            return substract(a,b)           
        case "x" : 
            return multiply(a,b)
        case "÷" :
            if(b === 0)
            return null
            else return divide(a,b)
        default : 
            return null
    }
}








function add(a,b) {
    a = parseFloat(a)
    b = parseFloat(b)
    return a + b
}
function substract(a,b) {
    return a - b
}
function multiply(a,b) {
    return a * b
}
function divide(a,b) {
    return a / b
}
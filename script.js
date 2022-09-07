let firstNumber = ""
let secondNumber = ""
let operator = null
let refreshScreen = false

const numberButtons = document.querySelectorAll(".number")
const opeartorButtons = document.querySelectorAll(".operator")
const equalButton = document.querySelector(".equal")
const pointButton = document.querySelector(".point")
const clearButton = document.getElementById("clear")
const deleteButton = document.getElementById("delete")
const lastOperationScreen = document.getElementById("lastOperation")
const currentOperationScreen = document.getElementById("currentOperation")

clearButton.addEventListener("click",clear)
pointButton.addEventListener("click",addPoint)
deleteButton.addEventListener("click",deleteNumber)
numberButtons.forEach((button) => {
    button.addEventListener("click", () => addNumber(button.textContent))
})













function deleteNumber() {
    currentOperationScreen.textContent = currentOperationScreen.textContent.slice(0,-1)
}





function clear() {
    currentOperationScreen.textContent = "0"
    lastOperationScreen.textContent = ""
    firstNumber.textContent = ""
    secondNumber.textContent = ""
    operator = null
}
function addPoint() {
    if (currentOperationScreen.textContent.includes(".")) {return}
    else currentOperationScreen.textContent += "."
}














function add(a,b) {
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
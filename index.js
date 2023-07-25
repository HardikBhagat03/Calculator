let num1 = prompt("What is the first number: ")
let num2 = prompt("What is the second number: ")
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEL = document.getElementById("sum-el")
function add() {
    let num3 = num1 + num2
    sumEL.textContent = "sum: " + num3

}

function substract() {
    let num4 = num1 - num2
    sumEL.textContent = "sum: " + num4
}

function divide() {
    let num5 = num1 / num2
    sumEL.textContent = "sum: " + num5
}

function multiply() {
    let num6 = num1 * num2
    sumEL.textContent = "sum: " + num6
}
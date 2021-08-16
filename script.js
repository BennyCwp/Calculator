const numberBtn = document.querySelectorAll("[data-number]")
const previousOperand = document.querySelector(".previous-operand")
const currentOperand = document.querySelector(".current-operand")
const clearBtn = document.querySelector(".clear")
const deleteBtn = document.querySelector(".delete")
const operatorBtn = document.querySelectorAll("[data-operator]")
const equalBtn = document.querySelector("[data-equals]")


numberBtn.forEach(button => button.addEventListener("click", updateDisplay))

function clear() {
    currentOperand.textContent = "";
    previousOperand.textContent = "";
}


function backspace() {
    currentOperand.textContent = currentOperand.textContent.slice(0,-1);
}

function updateDisplay(e) {
    if (e.target.textContent === "." && currentOperand.textContent.includes(".")) return;
    currentOperand.textContent += e.target.textContent;
    
}

function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b) {
    return a * b
  }
  
function divide(a, b) {
    return a / b
  }

function operate(operator, a, b){
    switch (operator){
        case "+":
            return add(a, b)
            break
        case "-":
            return subtract(a, b)
            break
        case "÷":
            return divide(a, b)
            break
        case "×":
            return multiply(a, b)
            break
        default:
            return
    }
}

clearBtn.addEventListener("click", clear);
deleteBtn.addEventListener("click", backspace);
operatorBtn.forEach(button => button.addEventListener("click", () => {
    if (currentOperand.textContent === "" && previousOperand.textContent === ""){
        return
    }
    else if (currentOperand.textContent === "" && previousOperand.textContent){
        previousOperand.textContent = previousOperand.textContent.slice(0, -1) + button.textContent
    }

    if (currentOperand.textContent && previousOperand.textContent){
        let operator = previousOperand.textContent.slice(-1);
        let num1 = parseFloat(previousOperand.textContent.slice(0,-1))
        let num2 = parseFloat(currentOperand.textContent)
        let results;
        results = operate(operator, num1, num2)
        previousOperand.textContent = results + button.textContent
        currentOperand.textContent = ""
    } 
    else if (currentOperand.textContent && previousOperand.textContent === ""){
        previousOperand.textContent = currentOperand.textContent + button.textContent;
        currentOperand.textContent = ""
    }
    
}))

equalBtn.addEventListener("click", () => {
    if (previousOperand.textContent === "" || currentOperand.textContent === "") return
    
    let operator = previousOperand.textContent.slice(-1);
    let num1 = parseFloat(previousOperand.textContent.slice(0,-1))
    let num2 = parseFloat(currentOperand.textContent)
    currentOperand.textContent = operate(operator, num1, num2)
    
    previousOperand.textContent = ""
})

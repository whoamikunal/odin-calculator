import { Stack } from "./Stack.js";

const inputElem = document.querySelector("#display");
let operandStack;
let operatorStack;

const setup = () => {
    operandStack = new Stack();
    operatorStack = new Stack();
    const calcElem = document.querySelectorAll(".calc-btn");
    calcElem.forEach(element => {
        element.addEventListener("click", () => {
            readValue(element);
        });
    });
}


const readValue = (elem) => {
    const value = elem.innerText.trim();
    console.log("->>> " + value);
    if ((value >= '0' && value <= '9') || value === '.') {
        if (operatorStack.isEmpty()) {
            inputElem.value += value;
        } else {
            inputElem.value = value;
        }
    } else if (value === "AC") {
        inputElem.value = "";
        operandStack.clear();
        operatorStack.clear();
    } else if (value === "DEL") {
        inputElem.value = inputElem.value.slice(0, -1);
    } else if (value === "=") {
        if (!operatorStack.isEmpty()) {
            const currOperand = Number(inputElem.value);
            operandStack.push(currOperand);
            const op2 = operandStack.pop();
            const op1 = operandStack.pop();
            let res = evalFn(operatorStack.pop(), op1, op2);
            if (!res) res = 0;
                inputElem.value = res;
        }
    } else {
        // check if stack is empty
        if (operatorStack.isEmpty()) {
            const currOperand = Number(inputElem.value);
            operandStack.push(currOperand);
            inputElem.value = "";
            operatorStack.push(value);
        } else {
            const currOperand = Number(inputElem.value);
            operandStack.push(currOperand);
            const op2 = operandStack.pop();
            const op1 = operandStack.pop();
            let res = evalFn(operatorStack.pop(), op1, op2);
            if (!res) res = 0;
                inputElem.value = res;
            operandStack.push(res);
            operatorStack.push(value);
        }
        
    }
}


const evalFn = (symbol, op1, op2) => {
    switch (symbol) {
        case "+":
            return op1 + op2;
        case "-":
            return op1 - op2;
        case "*":
            return op1 * op2;
        case "/":
            return op2 === 0 ? NaN : op1 / op2;
        default:
            return 0;            
    }
};


setup();
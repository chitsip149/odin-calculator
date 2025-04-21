function add (a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide (a, b){
    return a/b;
}

function operate(op, a, b){
    if (op=="add") return add(a, b);
    if (op=="subtract") return subtract(a, b);
    if (op=="multiply") return multiply(a, b);
    if (op=="divide") return divide(a, b);
}

let replace = true;
let operator;
let operand1;
let operand2;

const display = document.querySelector("#display");

const digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach(btn => {
    btn.addEventListener("click", (e)=>{
        if (e.target.id=="dot"){
            if (!display.textContent.split('').includes('.')){
                display.textContent+=e.target.textContent;
            }
            replace=false;
        }
        else if (replace) {
            display.textContent = e.target.textContent;
            replace = false;
        }
        else {
            display.textContent += e.target.textContent;
        }
    })
})


const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        operand1 = Number(display.textContent);
        operator = e.target.id;
        replace = true;
    })
})

const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", () => {
    if (operator!=undefined){
        operand2=Number(display.textContent);
        let result = operate(operator, operand1, operand2);
        display.textContent = result;

    }
    operand1=undefined;
    operand2=undefined;
    operator=undefined;
    replace=true;
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    display.textContent="0";
    operand1=undefined;
    operand2=undefined;
    operator=undefined;
    replace=true;
})

function changeSign(num){
    if (num==0) return num;
    let returnedNum = (-Number(num)).toString();
    return returnedNum;
}

const unaryButton = document.querySelector("#unary-operator");
unaryButton.addEventListener("click", ()=> {
    display.textContent = changeSign(display.textContent);
    if (display.textContent=="0"){
        replace = true;
    }
})

const percentButton = document.querySelector("#percent");
percentButton.addEventListener("click", () => {
    display.textContent = display.textContent / 100;
    if (display.textContent=="0"){
        replace = true;
    }
})


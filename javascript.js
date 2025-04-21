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
    if (op=='+') return add(a, b);
    if (op=='-') return subtract(a, b);
    if (op=='*') return multiply(a, b);
    if (op=='/') return divide(a, b);
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
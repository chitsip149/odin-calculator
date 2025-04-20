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

const display = document.querySelector("#display");

const digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach(btn => {
    btn.addEventListener("click", (e)=>{
        if (display.textContent!="0") {
            display.textContent += e.target.textContent;
        }
        else {
            display.textContent = e.target.textContent;
        }
    })
})
let operand1 = "";
let operand2 = "";
let isFirst = true;
let mode = "";
let operator = "";

const res = document.querySelector("#res");

const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const btnSum = document.querySelector("#btnSum");
const btnSub = document.querySelector("#btnSub");
const btnMul = document.querySelector("#btnMul");
const btnDiv = document.querySelector("#btnDiv");
const btnClr = document.querySelector("#btnClr");
const btnEql = document.querySelector("#btnEql");

btn0.addEventListener("click", () => {
    if(isFirst) {
        operand1 = operand1 + "0";
        res.innerHTML = operand1 + operator + operand2;
    } else {
        operand2 = operand2 + "0";
        res.innerHTML = operand1 + operator + operand2;
    }
})

btn1.addEventListener("click", () => {
    if(isFirst) {
        operand1 = operand1 + "1";
        res.innerHTML = operand1 + operator + operand2;
    } else {
        operand2 = operand2 + "1";
        res.innerHTML = operand1 + operator + operand2;
    }
})

btnSum.addEventListener("click", () => {
    mode = "sum";
    signHandler(mode);
    res.innerHTML = operand1 + operator + operand2;
    isFirst = false;
})

btnSub.addEventListener("click", () => {
    mode = "sub";
    signHandler(mode);
    res.innerHTML = operand1 + operator + operand2;
    isFirst = false;
})

btnMul.addEventListener("click", () => {
    mode = "mul";
    signHandler(mode);
    res.innerHTML = operand1 + operator + operand2;
    isFirst = false;
})

btnDiv.addEventListener("click", () => {
    mode = "div";
    signHandler(mode);
    res.innerHTML = operand1 + operator + operand2;
    isFirst = false;
})

const signHandler = mode => {
    switch(mode) {
        case "sum": 
            operator = "+";
            break;
        case "sub": 
            operator = "-";
            break;
        case "mul": 
            operator = "*";
            break;
        case "div": 
            operator = "/";
            break;
        default: 
            break;
    }
}

btnClr.addEventListener("click", () => {
    clearData();
    res.innerHTML = operand1 + operator + operand2;
})

btnEql.addEventListener("click", () => {
    let v1 = parseInt(operand1, 2);
    let v2 = parseInt(operand2, 2);
    let result = 0;

    if(v1 !== "" && v2 !== "") {
        switch(mode) {
            case "sum": 
                result = sum(v1, v2);
                break;
            case "sub":
                result = sub(v1, v2);
                break;
            case "mul": 
                result = mul(v1, v2);
                break;
            case "div":
                result = div(v1, v2);
                break;
            default:
                break;
        }
    }

    clearData();

    res.innerHTML = result;
})

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const clearData = () => {
    operand1 = "";
    operand2 = "";
    operator = "";
    isFirst = true;
}
function add(first, second){
    return first + second;
}

function subtract(first,second){
    return first - second;
}

function multiply(first, second){
    return first * second;
}

function divide(first, second){
    return first/second;
}

let first ="";
let operator= "";
let second= "";

function operate(first,second,operator){
    switch(operator){
        case "+":
            return add(first,second);
            break;
        case "-":
            return subtract(first,second);
            break;
        case "*":
            return multiply(first,second);
            break;
        case "/":
            return divide(first,second);
            break;
        default:
            return 0;
    }
}

function getNumbersAndOperator(){

    let display = document.querySelector(".display");
    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");
    let equal = document.querySelector(".equal");
    let clear = document.querySelector(".clear");
    let doAction = firstAction;


    numbers.forEach((number)=> number.addEventListener("click",listenerFunction));

    function listenerFunction(e){
        doAction(e);
    }
    operators.forEach((o)=> o.addEventListener("click", (e)=>{
        if(second != ""){
            equal.click();
        }
        doAction = secondAction;
        operator = e.target.value;
        display.innerHTML = first + " " + operator;
        console.log(operator);

    }
        

    ));

    function firstAction(e){
        first += e.target.value;
        display.innerHTML = first+" " ;
        console.log(first);
    }

    function secondAction(e){
        second += e.target.value;
        display.innerHTML = first + " " + operator + " " + second;
        console.log(second);
    }

    equal.addEventListener("click",(e)=> {
        let result = operate(Number(first),Number(second),operator)
        display.innerHTML= result;
        first = result;
        second = "";
        operator = "";
        console.log(result);
    })

    clear.addEventListener("click",(e)=>{
        first = "";
        second ="";
        operator = "";
        display.innerHTML = "";
        doAction = firstAction;

    })





}

getNumbersAndOperator();
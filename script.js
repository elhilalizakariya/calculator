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
    let show = "";
    let display = document.querySelector(".display");
    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");
    let equal = document.querySelector(".equal");
    let doAction = firstAction;


    numbers.forEach((number)=> number.addEventListener("click",listenerFunction));

    function listenerFunction(e){
        doAction(e);
    }
    operators.forEach((o)=> o.addEventListener("click", (e)=>{
        doAction = secondAction;
        operator = e.target.value;
        console.log(operator);

    }
        

    ));

    function firstAction(e){
        first += e.target.value;
        console.log(first);
    }

    function secondAction(e){
        second += e.target.value;
        console.log(second);
    }

    equal.addEventListener("click",(e)=> {
        let result = operate(Number(first),Number(second),operator)
        console.log(result);
    })





}

getNumbersAndOperator();
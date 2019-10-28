let button0 = document.getElementById('button0');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');
let button6 = document.getElementById('button6');
let button7 = document.getElementById('button7');
let button8 = document.getElementById('button8');
let button9 = document.getElementById('button9');
let article = document.getElementById('article');
let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMult = document.getElementById('buttonMult');
let buttonDiv = document.getElementById('buttonDiv');

let variable1 = '';
let variable2 = '';
let newNumber = false;
let operator = '';

function setVar1(a) {
    variable1 += a;
    console.log('var1 = ' + variable1);
    return variable1;
}

function SetlVar2(a) {
    variable2 += a;
    console.log('var2 = ' + variable2);
    return variable2;
}

function displayText(a) {
    article.innerText = a;
}

function showResult(a) {
    if (newNumber) {
        variable2 = SetlVar2(a);
        displayText(variable2);

    } else {
        variable1 = setVar1(a);
        displayText(variable1);

    }
}


function calculateResult(a, b, operator) {
    switch (operator) {
        case '+':
            return +a + +b;
            break;
        case '-':
            return +a - +b;
            break;
        case '*':
            return +a * +b;
            break;
        case '/':
            return +a / +b;
            break;

    }
}

buttonC.addEventListener('click', function () {
    article.innerText = '';
    variable1 = '';
    variable2 = '';
    newNumber = false;
});
buttonPoint.addEventListener('click', function () {
    showResult('.');
});
button0.addEventListener('click', function () {
    showResult(0);
});
button1.addEventListener('click', function () {
    showResult(1);
});
button2.addEventListener('click', function () {
    showResult(2);
});
button3.addEventListener('click', function () {
    showResult(3);
});
button4.addEventListener('click', function () {
    showResult(4);
});
button5.addEventListener('click', function () {
    showResult(5);
});
button6.addEventListener('click', function () {
    showResult(6);
});
button7.addEventListener('click', function () {
    showResult(7);
});
button8.addEventListener('click', function () {
    showResult(8);
});
button9.addEventListener('click', function () {
    showResult(9);
});

buttonPlus.addEventListener('click', function () {
    operator = '+';
    newNumber = true;
    let result = calculateResult(variable1, variable2, operator).toFixed(10);
    displayText(+result);
    variable1 = +result;
    variable2 = '';



});
buttonMinus.addEventListener('click', function () {
    operator = '-';
    newNumber = true;
    let result = calculateResult(variable1, variable2, operator).toFixed(10);
    displayText(+result);
    variable1 = +result;
    variable2 = '';
});
buttonMult.addEventListener('click', function () {
    operator = '*';
    if (newNumber) {
        let result = calculateResult(variable1, variable2, operator).toFixed(10);
        displayText(+result);
        variable1 = +result;
        variable2 = '';
    }
    newNumber = true;
});
buttonDiv.addEventListener('click', function () {
    operator = '/';
    newNumber = true;
});
buttonEq.addEventListener('click', function () {
    console.log('var1 = ' + variable1);
    console.log('var2 = ' + variable2);
    let result = calculateResult(variable1, variable2, operator).toFixed(10);
    console.log('result' + result);
    displayText(+result);
    newNumber = true;
    variable1 = +result;
    variable2 ='';
});
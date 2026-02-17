const display = document.getElementById('display');
let currentValue = '0';
let operator = '';
let previousValue = '';

function updateDisplay() {
    display.textContent = currentValue;
}

function appendNumber(num) {
    if (currentValue === '0' || currentValue === 'Error') {
        currentValue = num;
    } else {
        currentValue += num;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (previousValue && currentValue && operator) {
        calculate();
    }
    operator = op;
    previousValue = currentValue;
    currentValue = '0';
}

function calculate() {
    if (!previousValue || !operator) return;
    
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    let result;
    
    switch(operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current !== 0 ? prev / current : 'Error';
            break;
        default:
            return;
    }
    
    currentValue = result.toString();
    operator = '';
    previousValue = '';
    updateDisplay();
}

function clearDisplay() {
    currentValue = '0';
    operator = '';
    previousValue = '';
    updateDisplay();
}

function deleteLast() {
    if (currentValue.length > 1) {
        currentValue = currentValue.slice(0, -1);
    } else {
        currentValue = '0';
    }
    updateDisplay();
}

//get value from input
function getInputValue(fieldId) {
    const input = document.getElementById(fieldId);
    const inputValue = parseFloat(input.value);
    input.value = '';
    return inputValue;
};

//update value function
function updateTotal(fieldId, amount) {
    const deposit = document.getElementById(fieldId);
    const previousValue = parseFloat(deposit.innerText);
    const newValue = previousValue + amount;
    deposit.innerText = newValue;
};

//update total balance
function updateBalance(amount, isAdding) {
    const balance = document.getElementById('balance-total');
    const previousBalance = parseFloat(balance.innerText);
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;
    }
    balance.innerText = newBalance;
};

function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const value = parseFloat(fieldTag.innerText);
    return value;
}

//deposit button event handler
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    //error handle
    if (amount > 0) {
        updateTotal("deposit-total", amount);
        updateBalance(amount, true);
    }
    else {
        alert("pleas give a positive number")
    }
});

//withdraw button event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue("withdraw-input");
    const balance = getInnerTextValue('balance-total');
    //error handle
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount)
        updateBalance(amount, false);
    }
    else {
        alert("pleas give a positive number")
    }
});
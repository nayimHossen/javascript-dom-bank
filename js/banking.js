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

//deposit button event handler
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    updateTotal("deposit-total", amount);
    updateBalance(amount, true);
});

//withdraw button event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue("withdraw-input");
    updateTotal('withdraw-total', amount)
    updateBalance(amount, false);
});
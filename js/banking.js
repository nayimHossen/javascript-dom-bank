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

//custom alert Massage
function alertMassage(message) {
    document.getElementById("custom-alert").style.display = 'block';
    const para = document.createElement("p");
    para.innerHTML = message;
    document.getElementById("error-message").appendChild(para);
}

function ClickToClose() {
    document.getElementById("custom-alert").style.display = 'none';
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
        alertMassage("You con't give string or negative number.");
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
        alertMassage("You con't give string or negative number.");
    }
});
document.getElementById('deposit-button').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const depositInputValue = parseFloat(depositInput.value);

    const depositTotal = document.getElementById('deposit-total');
    const previousValueDepositTotal = parseFloat(depositTotal.innerText);
    const newDepositValue = previousValueDepositTotal + depositInputValue;
    depositTotal.innerText = newDepositValue;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalValue = parseFloat(balanceTotal.innerText);
    const newBalance = previousBalanceTotalValue + depositInputValue;
    balanceTotal.innerText = newBalance;
    depositInput.value = '';
});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValue = parseFloat(withdrawInput.value);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotal.innerText);
    const newWithdrawValue = previousWithdrawTotal + withdrawInputValue;

    withdrawTotal.innerText = newWithdrawValue;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalValue = parseFloat(balanceTotal.innerText);
    const newWithdrawBalance = previousBalanceTotalValue - withdrawInputValue;

    balanceTotal.innerText = newWithdrawBalance;
    withdrawInput.value = '';
})
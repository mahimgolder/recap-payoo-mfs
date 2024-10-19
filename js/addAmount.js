document.getElementById('add-amount-btn').addEventListener('click', function(e){
    e.preventDefault()

    const inputAddAmount = document.getElementById('input-amount').value;
    const inputAddAmountNumber = parseFloat(inputAddAmount)
    const inputPin = document.getElementById('input-pin').value;
    // wrong way to verify the pin
    if(inputPin === '1234'){
        const currentBalance = document.getElementById('current-balance').innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        const updatedBalance = inputAddAmountNumber + currentBalanceNumber;

        document.getElementById('current-balance').innerText = updatedBalance;
    }
    else{
        alert('Please try again');
    }
})
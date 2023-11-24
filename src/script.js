// convert USD amount to CAD amount
function convertUsdToCad(){
    const usdAmount = parseFloat(document.getElementById('usd-input').value);
    const exchangeRate = 1.360;
    const cadAmount = (usdAmount * exchangeRate).toFixed(3);

    if(!isNaN(cadAmount)) {
        document.getElementById('can-input').value = cadAmount;
    } else{
        alert('Invalid Input!! Please enter USD amount.')
    }
}

// switch USD and CAD and perform conversion
function interchangeCurrency(){
    const usdInput = document.getElementById('usd-input');
    const cadInput = document.getElementById('can-input');

    // store the current values
    const usdAmount = parseFloat(usdInput.value);
    const cadAmount = parseFloat(cadInput.value);

    // swapping the values
    usdInput.value = cadAmount.toFixed(3);
    cadInput.value = usdAmount.toFixed(3);
}

// convert CAD amount to USD amount
function convertCadToUsd(){
    const cadAmount = parseFloat(document.getElementById('can-input')).value;
    const exchangeRate = 0.735;
    const usdAmount = (cadAmount * exchangeRate).toFixed(3);

    if(!isNaN(usdAmount)){
        document.getElementById('usd-input').value = usdAmount;
    } else{
        alert('Invalid Input!! Please enter CAD amount.')
    }
}
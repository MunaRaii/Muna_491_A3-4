function convertUsdToCad(){
    const usdAmount = parseFloat(document.getElementById('usd-input').value);
    const exchangeRate = 1.360;
    const cadAmount = (usdAmount * exchangeRate).toFixed(3);

    if(!isNaN(cadAmount)) {
        document.getElementById('can-input').value = cadAmount;
    } else{
        alert('Invalid Input!!')
    }
}

function interchangeUsdAndCad(){
    
}
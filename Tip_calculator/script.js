'use strict';
// retrieve necessary elements
const calculateBtn = document.getElementById("calculate");


calculateBtn.addEventListener('click', function(){
    
    let billAmount = document.getElementById('bill').value;
    let tipPercentage = document.getElementById('tip').value;

    billAmount = parseFloat(billAmount);
    tipPercentage = parseFloat(tipPercentage);
    
    if (!isNaN(billAmount) && billAmount >= 0 && !isNaN(tipPercentage) && tipPercentage >= 0) {
        // calculating the tip
        let percent = (tipPercentage / 100) * billAmount;
        let total = billAmount + percent;
        // displaying the tip
        document
        .getElementById('total')
        .textContent = `$${total.toFixed(2)}`;
    } else {
        document
        .getElementById('total')
        .textContent = "Please enter a valid number";
    }
});

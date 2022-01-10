const currencyEl_one = document.getElById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.ementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fetch exchange rates and update the DOM
function calculate() {
	
}

//Event listners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);


calculate();
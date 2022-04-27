const $rate = document.getElementById("rate");
const $swap = document.getElementById("swap");
const $amountOne = document.getElementById("amount-one");
const $amountTwo = document.getElementById("amount-two");
const $currencyOne = document.getElementById("currency-one");
const $currencyTwo = document.getElementById("currency-two");

const dataFromBack = {
    uploaded: false,
};

async function getResourse() {
    const {value : currencyOne} = $currencyOne;
    const {value : currencyTwo} = $currencyTwo;

    const response = await fetch(`https://v6.exchangerate-api.com/v6/41b4541f3df8b629ff6e1018/latest/${currencyOne}`);
    const data = await response.json()
    

    dataFromBack.conversion_rates = data.conversion_rates;
    dataFromBack.uploaded = true;

    calculateCurrency(dataFromBack, currencyOne, currencyTwo);
};

function calculateCurrency(data, currencyOne, currencyTwo) {
    const rate = data.conversion_rates[currencyTwo];
    $amountTwo.value = +$amountOne.value * rate;
    
    $rate.innerText = `1 ${currencyOne} = ${(rate + " " + currencyTwo)}`;
};

function runCalculate() {
    const {value : currencyOne} = $currencyOne;
    const {value : currencyTwo} = $currencyTwo;
    calculateCurrency(dataFromBack, currencyOne, currencyTwo);
};

getResourse();

$amountOne.addEventListener("input", runCalculate);
$amountTwo.addEventListener("input", runCalculate);
$currencyOne.addEventListener("change", runCalculate);
$currencyTwo.addEventListener("change", getResourse);

$swap.addEventListener("click", () => {
    let clon = $currencyOne.value;
	$currencyOne.value = $currencyTwo.value;
	$currencyTwo.value= clon;
});
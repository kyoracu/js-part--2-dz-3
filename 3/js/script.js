const rateEl = document.getElementById("rate");
const swapEl = document.getElementById("swap");
const currencyOneEl = document.getElementById("currency-one");
const currencyTwoEl = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");

let exchangeRates = {};

const getExchangeRates = () => {
    const currencyOne = currencyOneEl.value;
    
    fetch(
        `https://v6.exchangerate-api.com/v6/41b4541f3df8b629ff6e1018/latest/${currencyOne}`
        )
        .then((res) => res.json())
        .then((data) => {
            exchangeRates = { ...data.conversion_rates};
            calculateRates();
        });
    };

    const calculateRates = () => {
        const currencyTwo = currencyTwoEl.value;
        const rate = exchangeRates [currencyTwo];
        const resultCalculate = +amountOne.value * rate;
        amountTwo.value = resultCalculate.toFixed(2);
    };

    getExchangeRates();

    amountOne.addEventListener("input", calculateRates);
    currencyOneEl.addEventListener("change", getExchangeRates);
    currencyTwoEl.addEventListener("change", calculateRates);

    // dz //

//     function swapChanges () {

//     let first = currencyOneEl.value
//     let second = currencyTwoEl.value

//     currencyOneEl.value = second;
//     currencyTwoEl.value = first;

// }
// swapChanges();

const swapChanges = () =>{

    let one = currencyOneEl.value;
    let two = currencyTwoEl.value;
    
    currencyOneEl.value = two;
    currencyTwoEl.value = one;
    
    let three = amountOneEl.value;
    let four = amountTwoEl.value;
    
    amountOneEl.value = four;
    amountTwoEl.value = three;
    
    }
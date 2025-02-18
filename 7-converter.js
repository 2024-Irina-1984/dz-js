
const exchangeRate_USD = 1;
const exchangeRate_RUB = 0.011;


function calculateUSD(currency1) {
    return currency1 * exchangeRate_USD;
}
function calculateRUB(currency2) {
    return currency2 * exchangeRate_RUB;
}
function converter(summa, currency, targetcCurrency) {
  let sumInUSD;
  if (currency === "USD") {
    sumInUSD = summa;
  } else if (currency === "RUB") {
    sumInUSD = calculateRUB(summa);
  } else {
    console.log('Неизвестная валюта');
  } 

  if (targetcCurrency === "USD") {
    return sumInUSD;
  } else if (targetcCurrency === "RUB") {
    return sumInUSD / exchangeRate_RUB;
  } else {
    console.log('Неизвестная целевая валюта');
  }
}
console.log(converter(1000, "RUB", "USD"));
console.log(converter(1000, "USD", "RUB"));

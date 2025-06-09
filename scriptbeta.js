const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencyToConvert = document.querySelector(".currency-to-convert");

const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const currencyValueConverted = document.querySelector(".currency-value");

const dolarToday = 5.64;
const euroToday = 6.38;
const poundToday = 7.57;

const currency = document.querySelector(".currency");
const currencyImageFrom = document.querySelector(".currency-img-from");
const currencyName = document.getElementById("currency-name");
const currencyImage = document.querySelector(".currency-img");

function convertValues() {
  if (currencyToConvert.value == "real") {
    currency.innerHTML = "Real";
    currencyImageFrom.src = "./assets/brasil.png";
  }
  if (currencyToConvert.value == "dolar") {
    currency.innerHTML = "Dólar Americano";
    currencyImageFrom.src = "./assets/dolar.png";
  }
  if (currencyToConvert.value == "euro") {
    currency.innerHTML = "Euro";
    currencyImageFrom.src = "./assets/euro.png";
  }
  if (currencyToConvert.value == "pound") {
    currency.innerHTML = "Libra";
    currencyImageFrom.src = "./assets/pound.png";
  }
}

function convertValuesNew() {
  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real";
    currencyImage.src = "./assets/brasil.png";
  }
  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImage.src = "./assets/dolar.png";
  }
  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png";
  }
  if (currencySelect.value == "pound") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/pound.png";
  }
}

function formatCurrency(value, currencyCode) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currencyCode,
  }).format(value);
}

function getCurrencyCode(currencyValue) {
  switch (currencyValue) {
    case "real":
      return "BRL";
    case "dolar":
      return "USD";
    case "euro":
      return "EUR";
    case "pound":
      return "GBP";
  }
}

function convertCurrencyValues() {
  // Pega o valor do input, troca vírgula por ponto, e tenta converter
  const rawInput = document.querySelector(".input-currency").value.replace(",", ".");
  const valueToConvert = parseFloat(rawInput);

  if (isNaN(valueToConvert)) {
    alert("Por favor, insira um valor numérico válido!");
    return;
  }

  let convertedValue;

  const from = currencyToConvert.value;
  const to = currencySelect.value;

  // Conversão entre todas as moedas
  const rates = {
    real: 1,
    dolar: dolarToday,
    euro: euroToday,
    pound: poundToday
  };

  if (from === to) {
    convertedValue = valueToConvert;
  } else {
    convertedValue = (valueToConvert * rates[from]) / rates[to];
  }

  // Exibe valores com formatação
  currencyValueToConvert.innerHTML = formatCurrency(valueToConvert, getCurrencyCode(from));
  currencyValueConverted.innerHTML = formatCurrency(convertedValue, getCurrencyCode(to));
}

convertButton.addEventListener("click", convertCurrencyValues);
currencyToConvert.addEventListener("change", convertValues);
currencySelect.addEventListener("change", convertValuesNew);





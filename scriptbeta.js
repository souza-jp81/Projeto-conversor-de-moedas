const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyToConvert = document.querySelector(".currency-to-convert")

const inputCurrencyValue = document.querySelector(".input-currency").value
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
const currencyValueConverted = document.querySelector(".currency-value")

const dolarToday = 5.64
const euroToday = 6.38
const poundToday = 7.57

const currency = document.querySelector(".currency")
const currencyImageFrom = document.querySelector(".currency-img-from")
const currencyName = document.getElementById("currency-name")
const currencyImage = document.querySelector(".currency-img")


function convertValues() {
    if (currencyToConvert.value == "real") {
        currency.innerHTML = "Real"
        currencyImageFrom.src = "./assets/brasil.png"
    }

    if (currencyToConvert.value == "dolar") {
        currency.innerHTML = "Dólar Americano"
        currencyImageFrom.src = "./assets/dolar.png"
    }

    if (currencyToConvert.value == "euro") {
        currency.innerHTML = "Euro"
        currencyImageFrom.src = "./assets/euro.png"
    }

    if (currencyToConvert.value == "pound") {
        currency.innerHTML = "Libra"
        currencyImageFrom.src = "./assets/pound.png"
    }
}

function convertValuesNew() {

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/brasil.png"
    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "pound") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/pound.png"
    }
}

function convertCurrencyValues() {
    // Obtém o valor que o usuário digitou
    const inputCurrencyValue = document.querySelector(".input-currency").value;

    // Converte o valor para um número
    const valueToConvert = parseFloat(inputCurrencyValue);

    // Verifica se o valor de entrada é um número
    if (isNaN(valueToConvert)) {
        alert("Por favor, insira um valor numérico válido!"); // Alerta se não for um número
        return; // Sai da função se não for válido
    }

    let convertedValue;

    // Verifica as moedas selecionadas e faz a conversão
    if (currencyToConvert.value == "real" && currencySelect.value == "dolar") {
        convertedValue = valueToConvert / dolarToday; // Converte Reais para Dólares
    } else if (currencyToConvert.value == "dolar" && currencySelect.value == "real") {
        convertedValue = valueToConvert * dolarToday; // Converte Dólares para Reais
    } else if (currencyToConvert.value == "real" && currencySelect.value == "euro") {
        convertedValue = valueToConvert / euroToday; // Converte Reais para Euros
    } else if (currencyToConvert.value == "euro" && currencySelect.value == "real") {
        convertedValue = valueToConvert * euroToday; // Converte Euros para Reais
    } else if (currencyToConvert.value == "dolar" && currencySelect.value == "euro") {
        convertedValue = (valueToConvert * dolarToday) / euroToday; // Converte Dólares para Euros
    } else if (currencyToConvert.value == "euro" && currencySelect.value == "dolar") {
        convertedValue = (valueToConvert * euroToday) / dolarToday; // Converte Euros para Dólares
    }
    // Adicione outras combinações de moedas conforme necessário

    // Mostra o valor convertido na tela
    currencyValueConverted.innerHTML = convertedValue.toFixed(2); // Mostra o resultado com duas casas decimais
}



convertButton.addEventListener("click", convertCurrencyValues)
currencyToConvert.addEventListener("change", convertValues)
currencySelect.addEventListener("change", convertValuesNew)





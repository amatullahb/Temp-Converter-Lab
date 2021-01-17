const button = document.getElementById('buttonId');
const fahrenheitResult = document.getElementById('fahrenheitResult');
const celsiusResult = document.getElementById('celsiusResult');
const kelvinResult = document.getElementById('kelvinResult');
const rankineResult = document.getElementById('rankineResult');


function calculate() {
    const value = document.getElementById('value').value;
    const scale = document.getElementById('scale').value;
    if(scale == "fahrenheit") {
        fahrenheitResult.innerHTML = value + " F";
        let celsius = (value - 32) * 5.0 / 9.0;
        celsiusResult.innerHTML = celsius.toFixed(2) + " C";
        kelvinResult.innerHTML = (celsius + 273.15).toFixed(2) + " K";
        rankineResult.innerHTML = (parseFloat(value) + 459.67).toFixed(2);
    } else if (scale == "celsius") {
        let fahrenheit = value * 9.0 / 5.0 + 32;
        fahrenheitResult.innerHTML = fahrenheit.toFixed(2) + " F";
        celsiusResult.innerHTML = value + " C";
        kelvinResult.innerHTML = (parseFloat(value) + 273.15).toFixed(2) + " K";
        rankineResult.innerHTML = (fahrenheit + 459.67).toFixed(2) + " R";
    } else if (scale == "kelvin") {
        let fahrenheit = ((parseFloat(value) - 273.15) * 9.0 / 5.0 + 32);
        fahrenheitResult.innerHTML = fahrenheit.toFixed(2)  + " F";
        celsiusResult.innerHTML = value - 273.15 + " C";
        kelvinResult.innerHTML = value + " K";
        rankineResult.innerHTML = (fahrenheit + 459.67).toFixed(2) + " R";
    } else if (scale == "rankine") {
        fahrenheitResult.innerHTML = (value - 459.67).toFixed(2) + " F";
        let celsius = (value - 491.67) + 5.0 / 9.0;
        celsiusResult.innerHTML = celsius.toFixed(2) + " C";
        kelvinResult.innerHTML = (celsius + 273.15).toFixed(2) + " K";
        rankineResult.innerHTML =  value + " R";
    }
}

button.addEventListener('click', () => {
    fahrenheitResult.innerHTML = "";
    celsiusResult.innerHTML = "";
    kelvinResult.innerHTML = "";
    rankineResult.innerHTML = "";
    calculate();
});

document.getElementById('value').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        fahrenheitResult.innerHTML = "";
        celsiusResult.innerHTML = "";
        kelvinResult.innerHTML = "";
        rankineResult.innerHTML = "";
        calculate();
    }
});
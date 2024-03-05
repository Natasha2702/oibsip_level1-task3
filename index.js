function convertTemp(){
let temperatureInput =document.getElementById("temperature");
let temperature= parseFloat(temperatureInput.value);

let unitsInput = document.getElementById("units")
let units = unitsInput.value;

let convertedTemp =document.getElementById("convertedTemp");
if (units === "celsius"){convertedTemp.innerHTML =convertToCelsius(temperature);}
else if (units === "fahrenheit"){convertedTemp.innerHTML = covertToFahrenheit(temperature);}
else if (units==="kelvin"){convertedTemp.innerHTML = convertToKelvin(temperature);}

function convertToCelsius(temp){return temp + " &deg;C";}

function covertToFahrenheit(temp){
    let convertedTemp = (temp *9/5) + 32;
    return convertedTemp + " &deg;F";}

function convertToKelvin(temp){
    let convertedTemp=temp + 273.15;
    return convertedTemp + " K";
}}
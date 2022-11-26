const API_KEY = 'cde42a4d2b9b5675e270f24f13364e4c'
const weatherIn = document.getElementById("weather-in"); 
const input = document.getElementById('city')
const form = document.getElementById('form')
const resultsTemp = document.getElementById('results-temp');
const tempResult = document.getElementById("temp-result")
const results = document.getElementById('results');
const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;


async function weather(city) {

    const response = await fetch(url(city));
    const responseData = await response.json();
    console.log(responseData);
    pageUpdate(responseData);
}

pageUpdate = (data) => {
    weatherIn.innerHTML = `Weather in ${data.name}`

    results.innerHTML = `<div id="results-temp"><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    <h1>${Math.floor(data.main.temp - 273.15)}°C</h1>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> </div><h2 style="text-transform:capitalize">${data.weather[0].main}, ${data.weather[0].description}</h2>
    <h2>Humidty : ${data.main.humidity}</h2>
    `

}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = input.value;

    if (city) {
        weather(city);
    }
});
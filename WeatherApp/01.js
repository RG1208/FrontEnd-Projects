const URL = "https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=9c696f730a9feccf4cc7a9ad2d2b8c66&units=metric";
const apikey = "9c696f730a9feccf4cc7a9ad2d2b8c66";

async function getWeather() {
    const response = await fetch(URL + `&appid=${apikey}`);
    let data = await response.json();
    console.log(data);
}

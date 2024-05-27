const URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apikey = "9c696f730a9feccf4cc7a9ad2d2b8c66";
const searchBox = document.querySelector(".top input")
const searchBtn = document.querySelector(".top button")
const weatherIcon = document.querySelector(".img2")


async function getWeather(city) {
    const response = await fetch(URL + city + `&appid=${apikey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&degc";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".percentage").innerHTML = data.main.humidity + "%";
    document.querySelector(".speed").innerHTML = data.wind.speed + "km/h";


    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "Images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "Images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "Images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "Images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "Images/mist.png";
    }

}
searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
})

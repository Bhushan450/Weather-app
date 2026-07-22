
const API_KEY = "7ba5107f05033ee618c96de9be0602bd";

document.getElementById("searchBtn").addEventListener("click", async () => {

    const city = document.getElementById("city").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    function displayWeather(data){

    document.getElementById("cityName").innerText = data.name;

    document.getElementById("temperature").innerText =
        `${Math.round(data.main.temp)}°C`;

    document.getElementById("condition").innerText =
        data.weather[0].description;

    document.getElementById("humidity").innerText =
        `${data.main.humidity}%`;

    document.getElementById("wind").innerText =
        `${data.wind.speed} km/h`;

    document.getElementById("feelsLike").innerText =
        `${Math.round(data.main.feels_like)}°C`;

    document.getElementById("pressure").innerText =
        `${data.main.pressure} hPa`;

    document.getElementById("weatherIcon").src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
}

    console.log(data);

    displayWeather(data);
});
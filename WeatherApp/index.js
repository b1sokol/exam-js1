const weatherBlock = document.querySelector('#weather');
async function loadWeather(e) {

    const server = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=64a2c7a425098b301a7dc9162a763ed8';
    const response = await fetch(server, {
        method: 'GET',
    });
    const responsResult = await response.json();
    if (response.ok) {
        getWeather(responseResult);
    } else {
        weatherBlock.innerHTML = responseResult.message;
    }
}

function getWeather(data) {

    const location = data.name;
    const temp = Math.round(data.main.temp);
    const feelslike = Math.round(data.main.feels_like);
    const weatherStatus = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;
    const template = '
        < div class="weather_header" >
<div class="weather_main">
    <div class="weather_city">${location}</div>
    <div class="weather_status">${weatherStatus}</div>
</div>
<div class="weather_icon">
    <img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="${waetherStatus}">
</div>
</div >
<div class="weather_temp">${temp}</div>
<div class="weather_feels-like">${feelslike}</div>';
}
if (weatherBloc) {
    loadWeather();
}
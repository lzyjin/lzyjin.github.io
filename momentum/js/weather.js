const weatherContainer = document.getElementById("weather");
const weather = weatherContainer.querySelector(".weather");
const temperature = weatherContainer.querySelector(".temperature");
const region = weatherContainer.querySelector(".location");


navigator.geolocation.getCurrentPosition((position) => {
  console.log(position)
  const lon = position.coords.longitude;
  const lat = position.coords.latitude;
  const openweatherApiKey = "03c6ad708e4ca3b7ad4c67c0fc7887d6";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openweatherApiKey}&units=metric`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      weather.innerText = data.weather[0].main;
      temperature.innerText = `${data.main.temp}°C`;
      region.innerText = data.name;
    });
});
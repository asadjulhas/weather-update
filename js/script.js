// Api Keya
const apiKeys = 'c4f70063a835bdb91f6b427be65261cc';

// Hit on API
const searchTemperature = () => {
  const getLocation = document.getElementById('city_name').value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getLocation}&appid=${apiKeys}&units=metric`)
    .then(res => res.json())
    .then(temperature => displayWeather(temperature))
}

// Set inner text function
const setInnterText = (id, value) => {
  document.getElementById(id).innerText = value;
}
// Set inner HTML function
const setInnterHtml = (id, value) => {
  document.getElementById(id).innerHTML = value;
}

// Display data function
const displayWeather = (temperature) => {
  const currentWeather = temperature;
  // console.log(currentWeather)
  if (currentWeather.cod == 200) {
    const {name, main, weather, sys} = currentWeather;
    setInnterText("city", name)
    setInnterText("country", sys.country)
    setInnterHtml("temperature", `${Math.ceil(main.temp)}  &deg;C`)
    setInnterHtml("weather_icon", `<img id="weather_icon" src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="">`)
    setInnterText("condition", weather[0].main)
  } else if (currentWeather.cod == 404) {
    // Clear data
    setInnterText("city", currentWeather.message)
    setInnterText("country", '')
    setInnterText("temperature", '')
    setInnterText("weather_icon", '')
    setInnterText("condition", '')
  }
}
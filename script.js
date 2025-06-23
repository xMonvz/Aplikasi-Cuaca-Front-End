const cityInput = document.getElementById("city");
const getWeatherButton = document.getElementById("getWeather");
const weatherDisplay = document.getElementById("weather");
const locationDisplay = document.getElementById("location");
const temperatureDisplay = document.getElementById("temperature");
const descriptionDisplay = document.getElementById("description");
const iconDisplay = document.getElementById("icon");

const API_KEY = "e97bf8ac85b51db260b506d9534b6b7e";

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=id`
    );

    if (!response.ok) throw new Error("Kota tidak ditemukan!");

    const data = await response.json();

    locationDisplay.textContent = `${data.name}, ${data.sys.country}`;
    temperatureDisplay.textContent = `Suhu: ${data.main.temp}°C`;
    descriptionDisplay.textContent = `${data.weather[0].description}`;
    iconDisplay.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherDisplay.classList.remove("hidden");

  } catch (error) {
    alert(error.message);
  }
}

getWeatherButton.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert("Harap masukkan nama kota!");
  }
});

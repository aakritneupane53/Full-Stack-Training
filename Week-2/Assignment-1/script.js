const apiKey = "4b30a6b3262f969ae2fa3bb7925ad94c";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const resultCard = document.getElementById("resultCard");

searchBtn.addEventListener("click", fetchWeather);

async function fetchWeather() {
  const city = cityInput.value.trim();

  if (!city) return;

  resultCard.classList.remove("hidden");
  resultCard.innerHTML = `<p class="loading">Loading...</p>`;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    const temp = data.main.temp;
    const condition = data.weather[0].description;
    const icon = data.weather[0].icon;
    const feelsLike = data.main.feels_like;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    resultCard.innerHTML = `
      <h2 class="city-name">${data.name}</h2>
      <img src="${iconUrl}" alt="weather icon" class="weather-icon"/>
      <p class="condition">${condition.charAt(0).toUpperCase() + condition.slice(1)}</p>
      <div class="weather-details">
        <div class="detail-item">
          <i class="fa-solid fa-temperature-arrow-down"></i>
          <span>Temperature: <strong>${temp}°C</strong></span>
        </div>
        <div class="detail-item">
          <i class="fa-solid fa-temperature-high"></i>
          <span>Feels Like: <strong>${feelsLike}°C</strong></span>
        </div>
        <div class="detail-item">
          <i class="fa-solid fa-droplet"></i>
          <span>Humidity: <strong>${humidity}%</strong></span>
        </div>
        <div class="detail-item">
          <i class="fa-solid fa-wind"></i>
          <span>Wind Speed: <strong>${windSpeed} m/s</strong></span>
        </div>
      </div>
    `;
  } catch (error) {
    resultCard.innerHTML = `
      <p class="error">Error: ${error.message}</p>
    `;
  }
}

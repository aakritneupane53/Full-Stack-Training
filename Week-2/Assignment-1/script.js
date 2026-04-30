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

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    resultCard.innerHTML = `
      <h2>${data.name}</h2>
      <img src="${iconUrl}" alt="weather icon" class="weather-icon"/>
      <p><strong>Temperature:</strong> ${temp}°C</p>
      <p><strong>Condition:</strong> ${condition}</p>
    `;
  } catch (error) {
    resultCard.innerHTML = `
      <p class="error">Error: ${error.message}</p>
    `;
  }
}

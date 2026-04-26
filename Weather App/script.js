"use strict";

const WETHER_API_KEY = "4b30a6b3262f969ae2fa3bb7925ad94c";
const inputButton = document.querySelector("#city-input");
const searchButton = document.querySelector("#search-btn");
const weatherResult = document.querySelector(".weather-data");

async function fetchData(city) {
  const resposnse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WETHER_API_KEY}&units=metric`,
  );
  if (!resposnse.ok) {
    console.log(resposnse);
    return new Error("Something went wrong fetching the data");
  }

  return resposnse.json();
}

let city;
function formHandler(event) {
  event.preventDefault();
  city = event.target.value;
}

searchButton.addEventListener("click", (event) => {
  event.preventDefault();

  const weatherData = fetchData(city);
  console.log(data);

  weatherData.then((data) => {
    weatherResult.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature ${data.main.temp}</p>
        <p>Condition ${data.weather[0]}</p>
        <p>Humidity ${data.main.humidity}</p>
  `;

    weatherResult.style.display = "block";
  });
});

inputButton.addEventListener("change", formHandler);

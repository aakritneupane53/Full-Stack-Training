import { useState } from 'react';

import { ErrorLandingPage, SearchForm, WeatherCard, LoadingPage } from './Components/exportHandler.js'
import './App.css'
function App() {



  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

    async function handleFormSubmission(){
      const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
      const url = `${BASE_URL}?q=${city}&appid=${import.meta.env.VITE_WEATHER_API}&units=metric`;

      if(!city.trim()) return;
      setLoading(true);
    try {
      const response = await fetch(url);
      if(!response.ok) throw new Error("Something went wrong while fetching the weather data");
      const data = await response.json();
      console.log(data);

      // Updating the necessary States
      setWeather(()=>({
        temperature:data?.main?.temp,
        feelsLike:data?.main?.feels_like,
        visibility:data?.visibility,
        wind:data.wind.speed,
        city:data?.name,
        humidity:data?.main?.humidity,
        pressure:data?.main?.pressure,
        icon: data?.weather[0].icon,
      }))

    } catch (error) {
      setError(error)
      console.log(error)
      
    }
    finally{
      setLoading(false)
    }
  }

 return (
  <div className="root">
    {loading ? (
      <LoadingPage />
    ) : error ? (
      <ErrorLandingPage
        message="Failed to fetch weather"
        onRetry={handleFormSubmission}
      />
    ) : weather ? (
      <WeatherCard weather={weather} />
    ) : (
      <SearchForm
        setCity={setCity}
        city={city}
        handleFormSubmission={handleFormSubmission}
      />
    )}
  </div>
);
}

export default App

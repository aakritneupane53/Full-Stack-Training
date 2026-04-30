import {
  ThermometerSun,
  ThermometerSnowflake,
  Snowflake,
  Flame,
  Eye,
  Wind,
  Droplets,
  Gauge
} from "lucide-react";

export default function WeatherCard({ weather }) {
  if (!weather) return <p>Loading...</p>;

  const temp = weather.temperature ?? 0;
  const feels = weather.feelsLike ?? 0;
  const iconUrl = `https://openweathermap.org/img/wn/${weather?.icon}@2x.png`

  return (
    <div className="weather-card blur-container">
      <h2 className="weather-title">Weather Data {weather.city}</h2>
      <img src={iconUrl} alt="Weather icon" className="weather-icon" />

      <section className="temperature-container">
        <div className="card-block">
          <h2>
            <span>{temp > 25 ? <ThermometerSun size={16} /> : <ThermometerSnowflake size={16} />}</span>
            Temperature{" "}
            
          </h2>
          <p>{temp}°C</p>
        </div>

        <div className="card-block">
          <h2>
            {feels > 25 ? <Flame size={16} /> : <Snowflake size={16} />}
            Feels Like{" "}
            
          </h2>
          <p>{feels}°C</p>
        </div>
      </section>

      <section className="other">
        <div className="card-block">
          <h2><Eye size={16} /> Visibility</h2>
          <p>{weather.visibility ?? "--"} km</p>
        </div>

        <div className="card-block">
          <h2><Wind size={16} /> Wind</h2>
          <p>{weather.wind ?? "--"} km/h</p>
        </div>
      </section>

      <section className="humidity-pressure">
        <div className="card-block">
          <h2><Droplets size={16} /> Humidity</h2>
          <p>{weather.humidity ?? "--"}%</p>
        </div>

        <div className="card-block">
          <h2><Gauge size={16} /> Pressure</h2>
          <p>{weather.pressure ?? "--"} hPa</p>
        </div>
      </section>
    </div>
  );
}
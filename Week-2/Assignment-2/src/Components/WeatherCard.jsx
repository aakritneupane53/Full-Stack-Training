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

  return (
    <div className="weather-card blur-container">
      <h2 className="weather-title">Weather Data {weather.city}</h2>

      <section className="temperature-container">
        <div className="card-block">
          <h2>
            Temperature{" "}
            {temp > 25 ? <ThermometerSun size={16} /> : <ThermometerSnowflake size={16} />}
          </h2>
          <p>{temp}°C</p>
        </div>

        <div className="card-block">
          <h2>
            Feels Like{" "}
            {feels > 25 ? <Flame size={16} /> : <Snowflake size={16} />}
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
import { useState, useEffect } from 'react';
import './Weather.css';

const Weather = () => {
    const [city, setCity] = useState('London');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Replace with your OpenWeatherMap API key
    const API_KEY = 'YOUR_API_KEY';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    useEffect(() => {
        fetchWeather();
    }, [city]);

    const fetchWeather = async () => {
        try {
            setLoading(true);
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            setWeather(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setWeather(null);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    return (
        <div className="weather-container">
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                    className="city-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {loading && <div className="loading">Loading...</div>}

            {error && <div className="error">{error}</div>}

            {weather && (
                <div className="weather-info">
                    <h2>{weather.name}, {weather.sys.country}</h2>
                    <div className="weather-details">
                        <div className="temperature">
                            <span className="temp-value">{Math.round(weather.main.temp)}°C</span>
                            <img
                                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt={weather.weather[0].description}
                                className="weather-icon"
                            />
                        </div>
                        <div className="weather-description">
                            {weather.weather[0].description}
                        </div>
                        <div className="additional-info">
                            <div className="info-item">
                                <span>Humidity:</span>
                                <span>{weather.main.humidity}%</span>
                            </div>
                            <div className="info-item">
                                <span>Wind:</span>
                                <span>{weather.wind.speed} m/s</span>
                            </div>
                            <div className="info-item">
                                <span>Feels like:</span>
                                <span>{Math.round(weather.main.feels_like)}°C</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather; 
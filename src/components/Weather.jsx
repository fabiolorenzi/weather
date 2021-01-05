import React, {useState} from "react";
import keys from "./keys.js";
import Logo from "../img/weather_icon.png";

const api = {
    key: keys.API_KEYS,
    base: keys.BASE_URL
};

function Weather() {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});

    const dateBuild = () => {
        let date = String(new window.Date());
        date = date.slice(3, 15);
        return date;
    };

    const search = e => {
        if (e.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
                setQuery("");
                setWeather(result);
            })
        };
    };

    return(
        <div className={typeof weather.main != "undefined"
            ? weather.main.temp > 18
                ? "app hot"
                : "app cold"
            : "app"
        }>
            <img src={Logo} className="image" alt="logo" />
            <div className="container">
                <input
                    type="text"
                    placeholder="Search..."
                    className="searchBar"
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                />
            </div>
            <div className="result">
                {typeof weather.main != "undefined" ? (
                    <div>
                        <div classname="location">
                            <h1>{weather.name}, {weather.sys.country}</h1>
                        </div>
                        <div className="date">
                            {dateBuild(new Date())}
                        </div>
                        <div className="temperature">
                            <h1>{Math.round(weather.main.temp)}°C, {weather.weather[0].main}</h1>
                        </div>
                    </div>
                ) : ("")}
            </div>
        </div>
    );
};

export default Weather;
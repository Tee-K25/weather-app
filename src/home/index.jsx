import React, { useEffect, useState } from "react";
import logo from "../assets/weather-svgrepo-com.svg";
import useFetchHook from "../components/use-fetch-hook";
import Loading from "../components/loading";
import Clear from "../assets/dynamicW/sun.png";
import Clouds from "../assets/dynamicW/cloudy.png";
import Rain from "../assets/dynamicW/rainy-day.png";
import Snow from "../assets/dynamicW/snow.png";
import Mist from "../assets/dynamicW/mist.png";
import Thunderstorm from "../assets/dynamicW/thunderstrom.png";

export default function Weather() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("Nairobi");
  const [keyWord, setKeyWord] = useState(null);
  const words = ["Clear", "Clouds", "Thunderstorm", "Rain", "Snow", "Mist"];
  // utility hook
  const { data, loading, errorMsg } = useFetchHook(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=fc4808a791e4074257e0377bdb26a2cc`
  );

  // utility function
  function checkWeather() {
    if (data) {
      const apiWord = data.weather[0].main;
      const weatherCondition = words.find((item) => {
        return item === apiWord;
      });
      switch (weatherCondition) {
        case "Clear":
          setKeyWord(Clear);
          break;
        case "Clouds":
          setKeyWord(Clouds);
          break;
        case "Thunderstorm":
          setKeyWord(Thunderstorm);
          break;
        case "Rain":
          setKeyWord(Rain);
          break;
        case "Snow":
          setKeyWord(Snow);
          break;
        case "Mist":
          setKeyWord(Mist);
          break;
        default:
          setKeyWord(Clear);
          break;
      }
    }
  }

  useEffect(() => {
    checkWeather();
  }, [data]);

  console.log(keyWord);
  // handler functions
  function handleSubmit(e) {
    e.preventDefault();
    setSearch(input);
    setInput("");
  }
  return (
    <div
      className="wrapper"
      style={{
        backgroundImage: `url(
          "./assets/sam-schooler-E9aetBe2w40-unsplash.jpg"
        )`,
      }}
    >
      <header>
        <img src={logo} alt="logo" />
      </header>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter location..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </form>
        <div className="search-icon" onClick={handleSubmit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <main>
          <div className="weather-icon">
            <img src={keyWord} alt="" />
          </div>
          <div className="weather-details">
            <div className="weather-details2">
              <div className="temp">
                <span>{data?.main?.temp}</span>
                <span>
                  <img src="./assets/icons8-celcius-48.png" alt="" />
                </span>
              </div>
              <div className="description">
                <p>
                  {data && data.weather && data.weather[0]
                    ? data.weather[0].description
                    : ""}
                </p>
              </div>
              <div className="city-name">
                <p>
                  <span className="name-city">{data?.name}</span>,{" "}
                  <span className="country">{data?.sys?.country}</span>
                </p>
              </div>
              <div className="humidity-wind">
                <div className="child">
                  <div className="h-icon">
                    <img
                      src="./assets/icons8-humidity-64.png"
                      alt="humidity png"
                    />
                  </div>
                  <div className="h-details">
                    <span> {data?.main?.humidity}%</span>
                    <span> Humidity</span>
                  </div>
                </div>
                <div className="child">
                  <div className="w-icon">
                    <img
                      src="./assets/icons8-wind-48.png"
                      alt="wind speed png"
                    />
                  </div>
                  <div className="h-details">
                    <span>{data?.wind?.speed} km/h</span>
                    <span> Wind</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

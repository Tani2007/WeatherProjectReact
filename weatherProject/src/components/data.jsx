import { useEffect, useState } from "react";

export function Data() {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("Mumbai");
  const [input, setinput] = useState();
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c5280f5618e80b5e8e2edde865a368ec`;
  const fetchApi = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data.main);
    console.log(data);
  };
  useEffect(() => {
    fetchApi(URL);
  }, [search]);
  const handleChange = (e) => {
    setinput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
  };
  const { temp, temp_min, temp_max, feels_like, humidity } = data;
  return (
    <>
      <section class="container">
        <div class="weather_header">
          <form onSubmit={handleSubmit} class="weather_search">
            <input
              type="text"
              value={null}
              onChange={handleChange}
              class="city_name"
              placeholder="search your city..."
            />
            <button>Search</button>
          </form>
        </div>

        <div class="weather_body">
          <h1 class="weather_city">{search}</h1>
          <p class="weather_date_time"></p>
          <div class="weather_data">
            <p class="weather_forecast">{Math.floor(temp - 273)}°C</p>
            <div class="weather_icon"></div>
          </div>
          <p class="weather_temperature"></p>
          <div class="weather_minmax">
            <p class="weather_min">MIN: {Math.floor(temp_min - 273)} °C</p>
            <p class="weather_max">MAX: {Math.floor(temp_max - 273)}°C</p>
          </div>
        </div>
        <section class="weather_info">
          <div class="weather_card">
            <div>
              <p>Feels Like</p>
              <p class="weather_feelsLike">{Math.floor(feels_like - 273)}°C</p>
            </div>
          </div>

          <div class="weather_card">
            <div>
              <p>Humidity</p>
              <p class="weather_humidity">{humidity}</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

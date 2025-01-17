export function Weather({ data }) {
  return (
    <div>
      {data.map((curData) => {
        return (
          <div key={curData.id}>
            <section class="container">
              <div class="weather_header">
                <form class="weather_search">
                  <input
                    type="text"
                    class="city_name"
                    placeholder="search your city..."
                  />
                </form>
              </div>

              <div class="weather_body">
                <h1 class="weather_city">
                  <curData className="name"></curData>
                </h1>
                <p class="weather_date_time"></p>
                <div class="weather_data">
                  <p class="weather_forecast"></p>
                  <div class="weather_icon"></div>
                </div>
                <p class="weather_temperature"></p>
                <div class="weather_minmax">
                  <p class="weather_min"></p>
                  <p class="weather_max"></p>
                </div>
              </div>

              <section class="weather_info">
                <div class="weather_card">
                  <div>
                    <p>Feels Like</p>
                    <p class="weather_feelsLike">15&#176</p>
                  </div>
                </div>

                <div class="weather_card">
                  <div>
                    <p>Humidity</p>
                    <p class="weather_humidity">15&#176</p>
                  </div>
                </div>

                <div class="weather_card">
                  <div>
                    <p>Wind</p>
                    <p class="weather_wind">15&#176</p>
                  </div>
                </div>

                <div class="weather_card">
                  <div>
                    <p>Pressure</p>
                    <p class="weather_pressure">15&#176</p>
                  </div>
                </div>
              </section>
            </section>
          </div>
        );
      })}
    </div>
  );
}

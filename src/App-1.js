import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import storm from "./img/weather-icons/storm.svg"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mahmoud"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">

        <header>
          <form action="">
            <input class="search" type="text" placeholder="Type city name here"/>
            <input class="btn" type="button" value="Find Weather" />
          </form>
        </header>

        <section class="today-weather">
          <img width="200px" src={storm} alt="" srcset="" />
          <p class="weather-now">Overcast Clouds</p>

          <div>
            <h2>Temperature</h2>
            <p>10º to 11ºC</p>
            <p>
              <span class="today-humidity-title">Humidity</span>
              <span class="today-humidity-value">78%</span>

              <span class="today-Pressure-title">Pressure</span>
              <span class="today-Pressure-value">100848</span>
            </p>
          </div>
        </section>

        <section class="rest-of-today-weather">


          <div>
            <p class="hour">3:00</p>
            <img width="100px" src={storm} alt="" />
            <p class="temperature">8ºC</p>
          </div>


          <div>
            <p class="hour">3:00</p>
            <img width="100px" src={storm} alt="" />
            <p class="temperature">8ºC</p>
          </div>


          <div>
            <p class="hour">3:00</p>
            <img width="100px" src={storm} alt="" />
            <p class="temperature">8ºC</p>
          </div>


          <div>
            <p class="hour">3:00</p>
            <img width="100px" src={storm} alt="" />
            <p class="temperature">8ºC</p>
          </div>


          <div>
            <p class="hour">3:00</p>
            <img width="100px" src={storm} alt="" />
            <p class="temperature">8ºC</p>
          </div>


          <div>
            <p class="hour">3:00</p>
            <img width="100px" src={storm} alt="" />
            <p class="temperature">8ºC</p>
          </div>


          <div>
            <p class="hour">3:00</p>
            <img width="100px" src={storm} alt="" />
            <p class="temperature">8ºC</p>
          </div>


        </section>
      </div>


    );
  }
}

export default App;

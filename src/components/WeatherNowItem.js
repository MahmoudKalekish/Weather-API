import React, { Component } from "react";
import { render } from "react-dom";

import storm from "../img/weather-icons/storm.svg"
import clear from "../img/weather-icons/clear.svg"
import cloudy from "../img/weather-icons/cloudy.svg"
import drizzle from "../img/weather-icons/drizzle.svg"
import rain from "../img/weather-icons/rain.svg"
import snow from "../img/weather-icons/snow.svg"
import fog from "../img/weather-icons/fog.svg"
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg"
import partlycloudy from "../img/weather-icons/partlycloudy.svg"

export default class WeatherNowItem extends Component {
  render() {
    console.log("Now data:", this.props.data);
    return (
        <section className="today-weather">
          <img width="200px" src={this.getImage(this.props.data.weather[0].id)} alt="" srcSet="" />
          <p className="weather-now">{this.props.data.weather[0].description}</p>
        <div>
            <h2>Temperature</h2>
            <p>{(this.props.data.main.temp_min- 273.15).toFixed(2)}ºC to {(this.props.data.main.temp_max- 273.15).toFixed(2)}ºC</p>
            <p>
              <span className="today-title">Humidity</span>
              <span className="today-value">{this.props.data.main.humidity}%</span>

              <span className="today-title">Pressure</span>
              <span className="today-value">{this.props.data.main.pressure}</span>
            </p>
          </div>
        </section>
    )
    }

    getImage = (id) => {
        switch(true){
            case (id < 300) :  return storm;
            case (id > 299 && id < 500) : return drizzle;
            case (id > 499 && id < 600) : return rain;
            case (id > 599 && id < 700) : return snow;
            case (id > 699 && id < 800) : return fog;
            case (id === 800) : return clear;
            case (id === 801) : return partlycloudy;
            case (id > 800 && id < 806) : return mostlycloudy;
            default: return storm;
        }
    }
  }



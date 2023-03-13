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

export default class Weather24hItem extends Component {
    render() {
        return (
            <section className="rest-of-today-weather">

                {this.props.dataList.slice(1,8).map((element,index) => {
                    return (
                        <div>
                            <p className="hour">{new Date(element.dt * 1000).getHours()}:00</p>
                            <img width="100px" src={this.getImage(element.weather[0].id)} alt="" />
                            <p className="temperature">{(element.main.temp- 273.15).toFixed(2)}ºC</p>
                        </div>
                    )
                })}
            </section>
        );
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


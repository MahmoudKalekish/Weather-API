import React, { Component } from "react";
import Search from "./components/Search";
import WeatherNow from "./components/WeatherNowItem";
import Weather24h from "./components/Weather24hItem";

import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Mahmoud",
            data: []
        };
    }

    handleInputChange = value => {
        this.setState({ name: value });
    };

    render() {
        let renderHTML = () => {
            if (this.state.data.length > 0) {
                return ( <
                    >
                    <
                    WeatherNow data = { this.state.data[0] }
                    /> <
                    Weather24h dataList = { this.state.data }
                    />   {
                        /* <WeatherNow data={fakeWeatherData.list[0]}/>
                                <Weather24h dataList={fakeWeatherData.list} /> */
                    } <
                    />
                );
            } else {
                return ( <
                    div className = "no-data" >
                    <
                    p > No data to show please search
                    for a city < /p> <
                    /div>
                )
            }
        }

        return ( <
            div className = "app" >
            <
            Search getData = { this.getFilteredData }
            /> { renderHTML() } <
            /div>
        );
    }

    getFilteredData = ({ list }) => {
        console.log("myList", list);

        // let today = new Date();
        // let time = today.getTime();
        // let i = 0;


        // for(let index = 0; index < list.length; index++){
        //   console.log("%c%d","background:yellow;padding:10px",time);
        //   console.log("%c%d","background:pink;pdding:10px",new Date(list[index].dt).getTime() );

        //   if ( new Date(list[index].dt * 1000).getTime() > time) {

        //     break;
        //   }
        //   i = index;
        // }
        // list = list.slice(i);
        this.setState({ data: list });
    }
}

export default App;
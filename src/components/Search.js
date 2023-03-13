import React from "react";
import "./Search.css";

class Search extends React.Component {
  API = " http://api.openweathermap.org/data/2.5/forecast?q=";
  KEY = "&cnt=8&appid=efa7f2a37da09554ff567048f227d924";
  state = {
    input: ""
  };

  render() {
    return (
      <header>
          <form action="">
            <input className="search" type="text" placeholder="Type city name here" />
            <input className="btn" type="button" value="Find Weather" onClick={this.fetchData} />
          </form>
        </header>
    );
  }

  fetchData = () => {
      let city = document.querySelector(".search").value;

      // let city = this.state.input;
      if ((city).trim() === ""){
        alert("please enter a city name");
        return;
      }

      fetch(this.API + city + this.KEY)
      .then(response => response.json())
      .then(data =>{
        if(data.cod === 404) {throw "Mispelled City"};
        this.props.getData(data);
        console.log("data:::", data)
        console.log("list:::", data.list)
      }).catch(e=>alert(e));
  }
}
export default Search;

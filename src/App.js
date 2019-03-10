import React, { Component } from 'react';
import './normalize.css';
import './skeleton.css';
import './App.css';

import NowWeather from './components/NowWeather';
import DailyWeather from './components/DailyWeather';
import HourlyWeather from './components/HourlyWeather';

class App extends Component {
  state = {
    now: {
      icon: "https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png", 
      hi: 79,
      realFeel: 78,
      phrase: "Mostly cloudy"
    },
    daily:[
      {id: 1, name: "Today", date: "Mar 9", icon: "https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png", hi: 82, low: 74,  phrase: "Partly sunny"},
      {id: 2, name: "Monday", date: "Mar 10", icon: "https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png", hi: 83, low: 74,  phrase: "Partly sunny"},
      {id: 3, name: "Tuesday", date: "Mar 11", icon: "https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png", hi: 83, low: 71,  phrase: "A morning shower possible"},
      {id: 4, name: "Wednesday", date: "Mar 12", icon: "https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png", hi: 83, low: 73,  phrase: "Partly sunny"},
      {id: 5, name: "Thursday", date: "Mar 13", icon: "https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png", hi: 80, low: 72,  phrase: "A passing morning shower"},
      {id: 6, name: "Friday", date: "Mar 14", icon: "https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png", hi: 83, low: 72,  phrase: "Mostly cloudy"},
      {id: 7, name: "Saturday", date: "Mar 15", icon: "https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png", hi: 82, low: 73,  phrase: "Mostly cloudy"}
    ]
  }

  showHourlyDataHandler = (id) => {
    console.log(id)
  }
  render() {
    return (
      <div className="App">
        <div className="app-container flex-column-center">
          <h1 className="app-container__location" >Miami, Fl</h1>
          <NowWeather now={this.state.now}/>
          <DailyWeather daily={this.state.daily} showHourlyData={this.showHourlyDataHandler}/>
          <HourlyWeather/>
        </div>
      </div>
    );
  }
}

export default App;

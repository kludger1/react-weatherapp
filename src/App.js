import React, { Component } from 'react';
import './App.css';

import NowWeather from './components/NowWeather';
import DailyWeather from './components/DailyWeather';
import HourlyWeather from './components/HourlyWeather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-container flex-column-center">
          <h1 className="app-container__location" >Miami, Fl</h1>
          <NowWeather/>
          <DailyWeather/>
          <HourlyWeather/>
        </div>
      </div>
    );
  }
}

export default App;

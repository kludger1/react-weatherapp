import React, { Component } from 'react';
import './normalize.css';
import './skeleton.css';
import './App.css';



import NowWeather from './components/NowWeather';
import DailyWeather from './components/DailyWeather';
// import HourlyWeather from './components/HourlyWeather';
import Search from './components/Search';

const API_KEY = ""

class App extends Component {




  state = {
    clickedDay: null,
    weather: {
      city: null,
      country: null,
      icon: "http://openweathermap.org/img/w/04n.png",
      hi: 79,
      realFeel: 78,
      phrase: "Mostly cloudy",
      list: [],
    },
    // daily: [
    //   { id: 1, name: "Today", date: "Mar 9", icon: "https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png", hi: 82, low: 74, phrase: "Partly sunny" },
    //   { id: 2, name: "Monday", date: "Mar 10", icon: "https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png", hi: 83, low: 74, phrase: "Partly sunny" },
    //   { id: 3, name: "Tuesday", date: "Mar 11", icon: "https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png", hi: 83, low: 71, phrase: "A morning shower possible" },
    //   { id: 4, name: "Wednesday", date: "Mar 12", icon: "https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png", hi: 83, low: 73, phrase: "Partly sunny" },
    //   { id: 5, name: "Thursday", date: "Mar 13", icon: "https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png", hi: 80, low: 72, phrase: "A passing morning shower" },
    //   { id: 6, name: "Friday", date: "Mar 14", icon: "https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png", hi: 83, low: 72, phrase: "Mostly cloudy" },
    //   { id: 7, name: "Saturday", date: "Mar 15", icon: "https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png", hi: 82, low: 73, phrase: "Mostly cloudy" }
    // ]
  }

  // componentDidMount() {
  //   axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=32218,us&appid=${API_KEY}`)
  //   .then(res => {
  //     this.setState({
  //       city: res.name
  //     })
  //   })
  // }



  kelvintofaren = (kelvin) => {
    return Math.round((kelvin * 9 / 5) - 459.67)

  }

  getWeather = async (location) => {
    let zipCode = location.zipCode
    let countryCode = location.countryCode
    const apiCall = await fetch(`https://api.openweathermap.org//data/2.5/forecast?zip=${zipCode},${countryCode}&appid=${API_KEY}`);
    const info = await apiCall.json();
    if (zipCode && countryCode) {
      // console.log(info)
      // console.log(info.main.weather[0].icon)
      let weather = { ...this.state.weather }
      weather.city = info.city.name;
      weather.country = info.city.country;
      weather.icon = info.list[0].weather[0].icon;
      weather.hi = this.kelvintofaren(info.list[0].main.temp_max);
      weather.realFeel = this.kelvintofaren(info.list[0].main.temp_min);
      weather.phrase = info.list[0].weather[0].description;
      weather.list = info.list.slice(0,7)
      this.setState({
        weather: weather
      })
    }

  }


  findHourlyData = (id) => {
    const hourlyData = this.state.daily.find(day => {
      return id === day.id
    });
    this.setState({
      clickedDay: hourlyData
    });
  };

  // updateLocation = (location) => {
  //   let now = { ...this.state.now }
  //   now.city = location.city
  //   now.state = location.state
  //   this.setState({
  //     now: now
  //   })
  // }
  render() {
    return (
      <div className="App">
        <div className="app-container flex-column-center">
          {this.state.weather.city ? <NowWeather weather={this.state.weather} /> : <p className="block center red" >Input a zip code and country code...</p>}
          <Search getWeather={this.getWeather} />
          <DailyWeather weather={this.state.weather} findHourlyData={this.findHourlyData} kelvintofaren={this.kelvintofaren} />
          {/* {this.state.clickedDay ? <HourlyWeather clickedDay={this.state.clickedDay} /> : <p className="block center" >Click a day...</p>} */}

        </div>
      </div>
    );
  }

}

export default App;

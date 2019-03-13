import React from 'react'


const Day = ({days, kelvintofaren}) => {
    const daysArr = days.map(day => {
        return (
        <div className="day flex-column-left" key={day.dt} >
            <div className="day__name-date-conatiner">
                <p className="day__name">{day.dt_txt.slice(0,10)}</p>
                <p className="day__date">{day.dt_txt.slice(12,16)}</p>
            </div>
            <div className="day__icon-box">
                <img className="icon" src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="Weather Icon" />
            </div>
            <div className="day__temp-box">
                <div className="temp">
                    <span className="day__temp-hi">{kelvintofaren(day.main.temp_max)}°</span> / <span className="day_day-temp-low">{kelvintofaren(day.main.temp_min)}°</span>
                </div>
                <div className="day__phrase">{day.weather[0].description}</div>
            </div>
        </div>
    )
    })

    return daysArr
    
}


const dailyWeather = ({weather,findHourlyData, kelvintofaren}) => {
    return (
        <div className="daily block">
            <h1 className="daily__header">Daily</h1>
            <hr />
            <div className="daily__day scroll ">
                <Day kelvintofaren={kelvintofaren} days={weather.list} findHourlyData={findHourlyData}/>
            </div>

        </div>

    )
}





export default dailyWeather
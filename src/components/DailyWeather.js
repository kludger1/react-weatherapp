import React from 'react'


const DailyDay = () => {
    return (
        <div className="day">
            <div className="day__name-date-conatiner">
                <p className="day__name">Today</p>
                <p className="day__date">Mar 9</p>
            </div>
            <div className="day__icon-box">
                <img className="icon" src="https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png" alt="Weather Icon" />
            </div>
            <div className="day__temp-box">
                <div className="temp">
                    <span className="day__temp-hi">82°</span> / <span className="daily_day-temp-low">74°</span>
                </div>
                <div className="day__phrase">Mostly cloudy</div>
            </div>
        </div>
    )
}

const dailyWeather = () => {
    return (
        <div className="daily block">
            <h1 className="daily__header">Daily</h1>
            <hr />
            <div className="daily__day">
                <DailyDay />
                <DailyDay />
                <DailyDay />
                <DailyDay />
                <DailyDay />
                <DailyDay />
                <DailyDay />
            </div>

        </div>

    )
}



export default dailyWeather
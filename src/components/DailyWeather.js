import React from 'react'


const Day = ({days, showHourlyData}) => {
    const daysArr = days.map(day => {
        return (
        <div className="day flex-column-left" key={day.id} onClick={() => showHourlyData(day.id)}>
            <div className="day__name-date-conatiner">
                <p className="day__name">{day.name}</p>
                <p className="day__date">{day.date}</p>
            </div>
            <div className="day__icon-box">
                <img className="icon" src={day.icon} alt="Weather Icon" />
            </div>
            <div className="day__temp-box">
                <div className="temp">
                    <span className="day__temp-hi">{day.hi}°</span> / <span className="day_day-temp-low">{day.low}°</span>
                </div>
                <div className="day__phrase">{day.phrase}</div>
            </div>
        </div>
    )
    })

    return daysArr
    
}


const dailyWeather = ({daily,showHourlyData}) => {
    return (
        <div className="daily block">
            <h1 className="daily__header">Daily</h1>
            <hr />
            <div className="daily__day scroll ">
                <Day days={daily} showHourlyData={showHourlyData}/>
            </div>

        </div>

    )
}





export default dailyWeather
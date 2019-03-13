import React from 'react'


const nowWeather = ({ weather }) => {
    return (
        <div className="now block flex-row-space-evenly scroll">
            <h1 className="now__location" >{weather.city}, {weather.country}</h1>
            <div className="flex-row-center">
                <div className="now__icon">
                    <img className="now__icon-img icon" src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="cloud-icon" />
                </div>
                <div className="now__info flex-column-center">
                    <div className="now__info-temp">
                        <div className="now__info-temp-hi">{weather.hi}°<span className="now-info-temp-hi-label">F</span></div>
                    </div>
                    <div className="now__info-realfeel">RealFeel® {weather.realFeel}°</div>
                    <div className="now__info-phrase">{weather.phrase}</div>
                </div>
            </div>
        </div>

    )
}


export default nowWeather
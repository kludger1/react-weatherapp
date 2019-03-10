import React from 'react'


const nowWeather = () => {
    return (
        <div className="now block flex-row-center">
            <div className="now__icon">
                <img className="now__icon-img icon" src="https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png" alt="cloud-icon" />
            </div>
            <div className="now__info flex-column-center">
                <div className="now__info-temp">
                    <div className="now__info-temp-hi">79°<span className="now-info-temp-hi-label">F</span></div>
                </div>
                <div className="now__info-realfeel">RealFeel® 78°</div>
                <div className="now__info-phrase">Mostly cloudy</div>
            </div>
        </div>
    )
}


export default nowWeather
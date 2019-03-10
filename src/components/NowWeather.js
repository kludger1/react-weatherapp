import React from 'react'


const nowWeather = ({now}) => {
    return (
        <div className="now block flex-row-center">
            <div className="now__icon">
                <img className="now__icon-img icon" src={now.icon} alt="cloud-icon" />
            </div>
            <div className="now__info flex-column-center">
                <div className="now__info-temp">
                    <div className="now__info-temp-hi">{now.hi}°<span className="now-info-temp-hi-label">F</span></div>
                </div>
                <div className="now__info-realfeel">RealFeel® {now.realFeel}°</div>
                <div className="now__info-phrase">{now.phrase}</div>
            </div>
        </div>
    )
}


export default nowWeather
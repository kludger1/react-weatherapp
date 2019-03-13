import React from 'react'

// const hourlyWeather = ({id}) => {
//     return <p>{id}</p>
// }

const hourlyWeather = ({ clickedDay }) => {

    return (
        <div className="block">
            <h1 className="daily__header">Hourly</h1>
            <hr />
            <div className="scroll">
                <table className="hourly ">
                    <thead>
                        <tr>
                            <th>{clickedDay.name}</th>
                            <th>9am</th>
                            <th>10am</th>
                            <th>11am</th>
                            <th>12am</th>
                            <th>1pm</th>
                            <th>2pm</th>
                            <th>3pm</th>
                            <th>4pm</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Forecast</td>
                            <td>
                                <div>
                                    <img className="icon" src="https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png" alt="Weather Icon" />
                                    <div className="day__phrase">{clickedDay.phrase}</div>
                                </div>

                            </td>
                            <td>
                                <div>
                                    <img className="icon" src="https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png" alt="Weather Icon" />
                                    <div className="day__phrase">Mostly cloudy</div>
                                </div>

                            </td>
                            <td>
                                <div>
                                    <img className="icon" src="https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png" alt="Weather Icon" />
                                    <div className="day__phrase">Mostly cloudy</div>
                                </div>

                            </td>
                            <td>
                                <div>
                                    <img className="icon" src="https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png" alt="Weather Icon" />
                                    <div className="day__phrase">Mostly cloudy</div>
                                </div>

                            </td>
                            <td>
                                <div>
                                    <img className="icon" src="https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png" alt="Weather Icon" />
                                    <div className="day__phrase">Mostly cloudy</div>
                                </div>

                            </td>
                            <td>
                                <div>
                                    <img className="icon" src="https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png" alt="Weather Icon" />
                                    <div className="day__phrase">Mostly cloudy</div>
                                </div>

                            </td>
                            <td>
                                <div>
                                    <img className="icon" src="https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png" alt="Weather Icon" />
                                    <div className="day__phrase">Mostly cloudy</div>
                                </div>

                            </td>
                            <td>
                                <div>
                                    <img className="icon" src="https://cdn4.iconfinder.com/data/icons/weather-line-set/24/icn-weather-scattered-showers-512.png" alt="Weather Icon" />
                                    <div className="day__phrase">Mostly cloudy</div>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>Temp (°F)</td>
                            <td>78°</td>
                            <td>80°</td>
                            <td>82°</td>
                            <td>82°</td>
                            <td>83°</td>
                            <td>82°</td>
                            <td>82°</td>
                            <td>81°</td>
                        </tr>
                        <tr>
                            <td>RealFeel®</td>
                            <td>82°</td>
                            <td>85°</td>
                            <td>88°</td>
                            <td>90°</td>
                            <td>90°</td>
                            <td>88°</td>
                            <td>86°</td>
                            <td>83°</td>
                        </tr>
                        <tr>
                            <td>Wind (mph)</td>
                            <td>12 SE</td>
                            <td>12 SE</td>
                            <td>12 SE</td>
                            <td>12 SE</td>
                            <td>12 SE</td>
                            <td>10 SE</td>
                            <td>10 SE</td>
                            <td>10 SE</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )



}



export default hourlyWeather
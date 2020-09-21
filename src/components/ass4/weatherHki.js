import { kMaxLength } from 'buffer'
import React, { useEffect, useState } from 'react'
import { getWeather, getIcon } from 'Services/weatherService'

const Weather = () => {

    const [weather, setWeather] = useState(null)
    const [icon, setIcon] = useState(null)

    useEffect(() => {
        async function get() {
            const data = await getWeather()
            setWeather(data)
            setIcon(data.weather[0].icon)
        }
        get();
    }, [])

    const present = () => {
        if (!weather) {
            return (
                <p>Loading weather..</p>
            )
        } else {
            const celc = (weather.main.temp - 272.15).toFixed(2)
            const descr = weather.weather[0].description
            const windSpd = weather.wind.speed
            const windDir = weather.wind.deg

            return (
                <div>
                    <h2>Weather in Helsinki</h2>
                    <div style={weatherbox}>
                        <img 
                            style={leftSide}
                            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                        />
                        <div style={rightSide}>
                            <p>{descr}</p>
                            <p>{celc} degree celcius</p>
                            <p>wind {windSpd} m/s towards {windDir} </p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        present()
    )
}

export default Weather

const weatherbox = {
    border: 'solid 4px black',
    margin: 0,
    padding: '5px',
    backgroundColor: '#8ecddf',
    display: 'flex',
    flexFlow: 'column-wrap',
    flexDirection: 'column',
    alignItems:'flex-start',
    justifyContent: 'flex-start',
}

const leftSide = {
    order: "1",
    // boxSizing: 'flex-box',
    width: 'min-content',
    height: 'min-content',
    // alignSelf: 'top'
}

const rightSide = {
    order: "2",
    // boxSizing: 'flex-box',
    width: 'fit-content',
    // alignSelf: 'top'
}
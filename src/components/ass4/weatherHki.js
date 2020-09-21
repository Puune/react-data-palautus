import React, { useEffect, useState } from 'react'
import { getWeather } from 'Services/weatherService'

const Weather = () => {

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        async function get() {
            const data = await getWeather()
            setWeather(data)
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
                <div style={weatherbox}>
                    <h2>Weather in Helsinki</h2>
                    <p>{descr}</p>
                    <p>{celc} degree celcius</p>
                    <p>wind {windSpd} m/s towards {windDir} </p>
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
    backgroundColor: '#8ecddf'
}
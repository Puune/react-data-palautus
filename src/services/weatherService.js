import weatherAPI from 'Utils/weatherAPI'

const APICODE = '114332134ea7ed53cb7a0e88a863eb5d'
const CITY = "Helsinki"

export const getWeather = () => {
    return weatherAPI.get(`weather?q=${CITY}&appid=${APICODE}`)
        .then(response => response.data)
        .then(function(response){
            return response
        });    
}

export const getIcon = (icon) => {
    return weatherAPI.get(`http://openweathermap.org/img/wn/${icon}@2x.png`)
        .then(response => console.log(response))
        .then(function(response){
            return response
        })
}
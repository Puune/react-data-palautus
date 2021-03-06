import axios from 'axios'
import https from 'https'

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
})

export default axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    responseType:'json',
    httpsAgent: httpsAgent,
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*',
    }
})
import axios from 'axios';
import https from 'https'

const httpsAgent = new https.Agent({
    rejectUnauthorized: false, // (NOTE: this will disable client verification)
  })

export default axios.create({
    baseURL:'https://api.citybik.es/v2/',
    responseType:'json',
    httpsAgent: httpsAgent,
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*',
    }
})
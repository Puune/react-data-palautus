import axios from 'axios'
import https from 'https'

const httpsAgent = new httpsAgent({
    rejectUnauthorized: false
})

export default axios.create({
    baseURL: '',
})
import axios from 'axios';

// https://www.alphavantage.co/support/#api-key
const api = axios.create({
    baseURL: 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=PETR4.SA&interval=5min&apikey=7EOJAOQI6XUPJ67I'
});

export default api;
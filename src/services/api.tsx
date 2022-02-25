import axios from 'axios';

// https://www.alphavantage.co/support/#api-key
//https://www.mercadobitcoin.net/api/ADA/trades/1645157792/1645282800/
// .get(`formTemplate/${id}`)
//"https://www.mercadobitcoin.net/api/ADA/trades/1645157792/1645282800/"
//"https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
//'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=PETR4.SA&interval=5min&apikey=J1DQ6V0FZ2S9L0PY'

// const api = axios.create({
//     baseURL: "https://www.mercadobitcoin.net/api/BTC/day-summary/2022/02/18/"
// });

export const api = axios.create({
    baseURL: "https://www.mercadobitcoin.net/api/",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    }
  });

export default api;
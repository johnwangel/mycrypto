import { GET_HEADER } from '../constants/constants';

export const INIT = 'INIT';
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';


// Gets initial data - NOTE: initial data persists until page is reloaded
export function getData(){
  return dispatch => {
    //gets a list of all available markets and their data from API
    fetch(`https://data.messari.io/api/v2/assets?fields=id,slug,symbol,name,metrics/market_data/price_usd,metrics/market_data/percent_change_usd_last_24_hours`, GET_HEADER)
    .then(response => response.json())
    .then(data => {
      dispatch(Process(data.data))
    })
    .catch( err => console.log(err.message));
  };
}
const Process = data => ({
  type : INIT,
  payload : data
});

// add a market from list
export const addMarket = data => ({
  type : ADD,
  payload : { symbol: data }
});

// remove a market from list
export const removeMarket = data => ({
  type : REMOVE,
  payload : { symbol: data }
});

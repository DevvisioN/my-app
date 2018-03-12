import { CALL_API } from 'redux-api-middleware'
import { API_URL } from "../constants/Constants";

export const GET_CURRENCY_REQUEST = 'GET_CURRENCY_REQUEST'
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS'
export const GET_CURRENCY_FAILURE = 'GET_CURRENCY_FAILURE'

export function getCurrencyData() {
    return (dispatch) =>{
        return dispatch({
            [CALL_API]:{
                endpoint: API_URL,
                method:'GET',
                types:[GET_CURRENCY_REQUEST, GET_CURRENCY_SUCCESS, GET_CURRENCY_FAILURE]
            }
        });
    };
}



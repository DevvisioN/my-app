import { handleActions } from 'redux-actions'
import Immutable from 'immutable'

import * as ActionTypes from '../actions/CurrencyActions'

const initialState = Immutable.fromJS({currencyData: {}});

export default handleActions({
    [ActionTypes.GET_CURRENCY_REQUEST]: (state,action) => {
        return state.set('currencyData', Immutable.Map({
            isFetching:true,
            isError:false,
            data:action.payload
        }));
    },
    [ActionTypes.GET_CURRENCY_SUCCESS]: (state,action) => {
        return state.set('currencyData', Immutable.Map({
            isFetching:false,
            isError:false,
            data:action.payload
        }));
    },
    [ActionTypes.GET_CURRENCY_FAILURE]: (state,action) => {
        return state.set('currencyData', Immutable.Map({
            isFetching:false,
            isError:true,
            data:action.payload
        }));
    }
}, initialState);
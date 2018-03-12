import { combineReducers } from 'redux'

import CurrencyData from './CurrencyReducer'


const todoApp = combineReducers({ CurrencyData });

export default todoApp;
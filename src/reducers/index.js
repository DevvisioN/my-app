import { combineReducers } from 'redux'

import CurrencyData from './CurrencyReducer'
import GraphReducer from './GraphReducer'


const todoApp = combineReducers({ CurrencyData, GraphReducer });

export default todoApp;
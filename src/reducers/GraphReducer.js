import Immutable from 'immutable'
import { handleActions } from 'redux-actions'
import * as ActionTypes from '../actions/GraphActions'

const initialState = Immutable.fromJS({data: {}});

export default handleActions({
    [ActionTypes.SET_COORDINATES]: (state, action)=>{
        return state.set('coordinates',Immutable.Map({
            data: action.payload
        }));
    }
},initialState);
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import App from './App'

const store = configureStore(window.INITIAL_STATE)

export default class Root extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

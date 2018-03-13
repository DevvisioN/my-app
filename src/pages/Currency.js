import React from 'react'
import { connect } from 'react-redux'
import { getCurrencyData } from '../actions/CurrencyActions'
import CurrencyTable from '../components/CurrencyTable'
import DataButton from '../components/DataButton'
import Graph from '../components/Graph'

class Currency extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            base:'',
            date:'',
            currencyList: []
        }
    this.getDataRequest = this.getDataRequest.bind(this)
    }

    getDataRequest(){
        this.props.dispatch(getCurrencyData()).then(response =>{
            this.getCurrencyList()
        });
    }

    getCurrencyList(){
          let values = [];
          let respData = this.props.currencyList.getIn(['currencyData', 'data']).rates


          Object.keys(respData).map(key =>{
              console.log(key)
              values.push({value: respData[key], id: key})
          });

          this.setState({
              currencyList: values
          })
    }

    render(){
        let isFetching = this.props.currencyList.getIn(['currencyData', 'isFetching']);
        return(
            <div className='row'>
                <div className='col-md-6 data-button'>
                    <DataButton clickMe={ this.getDataRequest }> Get data</DataButton>
                </div>
                <div className='col-md-6 currency'>
                    <CurrencyTable bsClass='table' data={this.state.currencyList } isFetching={ isFetching }/>
                </div>
                <div className='col-md-6 dynamic-list'></div>
                <div className='col-md-6 graph'>
                    <Graph></Graph>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        currencyList: state.CurrencyData,
    }
}

export default connect(mapStateToProps)(Currency);
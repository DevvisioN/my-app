import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Panel } from 'react-bootstrap'
import { getCurrencyData } from '../actions/CurrencyActions'
import CurrencyTable from '../components/CurrencyTable'
import DataButton from '../components/DataButton'
import DynamicList from '../components/DynamicList'
import Graph from '../components/Graph'

class Currency extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            base:'',
            date:'',
            currencyList: []
        };
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
          // eslint-disable-next-line
          Object.keys(respData).map(key =>{
              values.push({value: respData[key], id: key})
          });

          this.setState({
              currencyList: values
          })
    }

    render(){
        let isFetching = this.props.currencyList.getIn(['currencyData', 'isFetching']);
        let header = (<span>Get currency data</span>)
        return(
            <Col md={12}>
                <Panel header={header}>
                <Col md={2} className='data-button'>
                    <DataButton clickMe={ this.getDataRequest }> Get data</DataButton>
                </Col>
                    <Col md={10} className='currency'>
                        <CurrencyTable bsClass='table' data={this.state.currencyList } isFetching={ isFetching }/>
                    </Col>
                </Panel>
                    <Col md={6} className='dynamic-list'>
                        <DynamicList />
                    </Col>
                    <Col md={6} className='graph'>
                        <Graph/>
                    </Col>
            </Col>
        );
    }
}

function mapStateToProps(state){
    return {
        currencyList: state.CurrencyData,
    }
}

export default connect(mapStateToProps)(Currency);
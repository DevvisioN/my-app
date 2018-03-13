import React from 'react'
import PropTypes from 'prop-types'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import FontAwesome from 'react-fontawesome'

class CurrencyTable extends React.Component {
    constructor(props){
        super(props);
    }
    renderWaitingScreen() {
        return  this.props.isFetching ? <FontAwesome className="fa-3x fa-spin cog-block" name="cog"/> : <span>No data available in table</span>;
    }

    render(){
        let tableOptions = {
            noDataText: this.renderWaitingScreen(),
            /*height:400,
            scrollTop:'Bottom'*/
            //todo why i can`t use it`s options from here!?
        };
        return(
            <BootstrapTable data={ this.props.data } options={tableOptions}>
                <TableHeaderColumn dataField={'id'} isKey={true}>Валюта</TableHeaderColumn>
                <TableHeaderColumn dataField={'value'}>Значення</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}
CurrencyTable.propTypes = {
    data: PropTypes.array,
    isFetching:PropTypes.bool
};

export default CurrencyTable;
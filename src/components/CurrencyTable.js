import React from 'react'
import PropTypes from 'prop-types'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { ProgressBar } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

class CurrencyTable extends React.Component {

    renderWaitingScreen() {
        return  this.props.isFetching ? <FontAwesome className="fa-3x fa-spin cog-block" name="cog"/> : <span>No data available in table</span>;
    }

    renderProgressBar(cell, row){
        return <ProgressBar now={row.value}/>
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
                <TableHeaderColumn dataFormat={this.renderProgressBar.bind(this)} dataField={'value'}>Progress</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}
CurrencyTable.propTypes = {
    data: PropTypes.array,
    isFetching:PropTypes.bool
};

export default CurrencyTable;
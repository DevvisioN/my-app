import React from 'react'
import { Button } from 'react-bootstrap'
import {connect} from "react-redux";

class DataButton extends React.Component{

    render(){
        return(
            <Button bsStyle = 'success' onClick={ this.props.clickMe }>
                Get data
            </Button>
        )
    }
}

export default connect()(DataButton);
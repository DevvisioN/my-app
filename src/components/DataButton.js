import React from 'react'
import { Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import {connect} from "react-redux";

class DataButton extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Button bsStyle = 'success' onClick={  }>
                Get data
            </Button>
        )
    }
}

export default connect()(DataButton);
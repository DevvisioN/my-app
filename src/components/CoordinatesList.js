import React from 'react'
import { connect } from 'react-redux'
import { ListGroup, Panel, Row, Col } from 'react-bootstrap'
import GraphInput from '../components/GraphInput'

class CoordinatesList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            coordinatesList: []
        };

    }

    render(){
        return(
            <Row>
                <Col md={12} className={"input"}>
                    <GraphInput />
                </Col>
                <Col md={12} className={'coordinates'}>
                    <NumberList/>
                </Col>
            </Row>
        );
    }
}

function NumberList() {
    let numbers = [1, 2, 3, 4, 5];

    return (
        <ul>
            {numbers.map((items, index) => {
                return <li key={index}>{items}</li>
            })}
        </ul>
    );
}

export default connect()(CoordinatesList);
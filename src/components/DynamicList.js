import React from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap'



function DynamicList() {
    let numbers = [1, 2, 3, 4, 5];

    return (
        <Panel header={'dynamic list'}>
            <ListGroup>
               {numbers.map((items, index) => {
                   return <ListGroupItem key={index}>{items}</ListGroupItem>
               })}
            </ListGroup>
        </Panel>
    );
}

export default connect()(DynamicList);
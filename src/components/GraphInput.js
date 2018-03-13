import React from 'react'
import { Form, FormGroup, FormControl } from 'react-bootstrap'

class GraphInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputs: [
                {id: 'test1', name:'test1', placeholder: 'ssss'},
                {id: 'test22', name:'test222', placeholder: 'tes'}
            ],
            inputValues: {
                test1: 'sdasasd',
                test222: ''
            }

        };
        this.handleChange = this.handleChange.bind(this)
    }

    getValidationState(){
            return 'success';
    }

    handleChange(event){
        let currentValues = this.state.inputValues;

        Object.keys(currentValues).forEach( key =>{
            currentValues[event.target.name] = event.target.value;
        });

        this.setState({ inputValues: currentValues });
    }

    render(){
        return(
            <div>
                {this.state.inputs.map(input => {
                    return (
                        <FormGroup key={`input-${input.id}`}>
                            <FormControl type={'text'}
                                         id={input.id}
                                         name={input.name}
                                         value={this.state.inputValues[input.name]}
                                         placeholder={input.placeholder}
                                         onChange={this.handleChange}/>
                        </FormGroup>
                    )
                })}
            </div>
        );
    }
}
export default GraphInput;
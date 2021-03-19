import {Form, Button} from 'react-bootstrap'
import './App.css';
import React from 'react';

export class MyForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            gender: "",
            feedback: "",
            age: ""
        };
    }

    myChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value})
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        fetch(`http://localhost:5000/player`, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            .then((response) => response.json())
            .then((data) => {
                alert(data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render () {
        return (
            <Form onSubmit={this.mySubmitHandler}>
                <TextInput onChangeHandler={this.myChangeHandler} title="First name"/>
                <TextInput onChangeHandler={this.myChangeHandler} title="Last name"/>
                <RadioGroup onChangeHandler={this.myChangeHandler}/>
                <TextArea onChangeHandler={this.myChangeHandler} rows={3}/>
                <DropDownList onChangeHandler={this.myChangeHandler} />
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        )
    }
}

function TextInput({title, onChangeHandler}){
    const [word1, word2] = title.toLowerCase().split(' ');
    const name = word1 + '_' + word2;
    return (
        <Form.Group>
            <Form.Label>{ title }</Form.Label>
            <Form.Control name={name} onChange={onChangeHandler} type="text" placeholder={`Enter the ${title.toLowerCase()}`} />
        </Form.Group>
    )
}

function RadioGroup({onChangeHandler}){
    return (
        <Form.Group controlId="formBasicRadio">
                <Form.Check onChange={onChangeHandler} type="radio" label="Male" name="gender" value="male"/>
                <Form.Check onChange={onChangeHandler} type="radio" label="Female" name="gender" value="female"/>
        </Form.Group>
    )
}

function TextArea({rows, onChangeHandler}){
    return (
        <Form.Group controlId="formBasicTextArea">
            <Form.Label>Feedback</Form.Label>
            <Form.Control name="feedback" onChange={onChangeHandler} as="textarea" rows={rows} />
        </Form.Group>
    )
}

function DropDownList({onChangeHandler}){
    const options = ['Choose option', '0-18', '18-45', '45+'];

    return (
        <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Choose age</Form.Label>
            <Form.Control onChange={onChangeHandler} name="age" as="select" custom>
                {options.map(option => <option value={option}>{option}</option>)}
            </Form.Control>
        </Form.Group>
    )
}
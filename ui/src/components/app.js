import React from 'react';
import axios from 'axios';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

export default function app() {
    return (
        <div>
            <h1>JSX</h1>
            <form>
                <FormGroup
                    controlId="formBasicText">
                    <ControlLabel>Working example with validation</ControlLabel>
                    <FormControl
                        type="text"                       
                        placeholder="Enter text"                      
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                </FormGroup>
            </form>
            <FirstName />
        </div>
    );
}


export class FirstName extends React.Component {


    constructor() {
        super();
        this.state = { posts: null }
    }

    componentDidMount() {
        axios.get(
            'http://date.jsontest.com/',
        ).then(res => {
            console.log(res.data);
            const posts = res.data;
            this.setState({ posts });
        });
    }

    render() {
        if (this.state.posts) {
            return (
                <div>

                    <p>{this.state.posts.time}</p>

                </div>
            );
        }
        return <div>Loading...</div>;
    }
}
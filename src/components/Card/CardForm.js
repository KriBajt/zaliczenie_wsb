import React, { Component } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { IoIosCloseCircle, IoIosSave } from 'react-icons/io';


export default class CardForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            title: '',
            content: ''
        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    submitHandler = e => {
        e.preventDefault()
        console.log(this.state);
        axios.post('http://localhost:1028/api/taskboards/3/cards', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        const { id, title, content } = this.state
        return (
            <div className="formContainer">
                <form onSubmit={this.submitHandler}>
                    <div className="formItem">
                        <input type="title" name="title" value={title} onChange={this.changeHandler} placeholder="Wpisz tytuł zadania" />
                    </div>
                    <div className="formItem">
                        <input type="content" name="content" value={content} onChange={this.changeHandler} placeholder="Wpisz treść zadania" />
                    </div>
                    <div>
                        <Button variant="primary" type="submit" className="ml-0">
                            <IoIosSave />
                        </Button>
                    </div>
                </form>
            </div >
        )
    }
}

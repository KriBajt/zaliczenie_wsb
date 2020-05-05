import React, { Component } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { IoIosCloseCircle, IoIosSave } from 'react-icons/io';
import SchowCard from './ShowCard';
import PropTypes from 'prop-types';


export default class CardForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: null,
            title: '',
            content: '',
            priority: '',
            cards: []

        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = e => {
        axios.post('http://localhost:1028/api/taskboards/3/cards', this.state)
            .then(response => {
            })
            .catch(error => {
            })
        window.location.reload(false);

    }


    render() {
        const { id, title, content, priority, state, cards } = this.state
        return (
            <div className="formContainer">
                <form onSubmit={this.submitHandler}>
                    <div className="formItem">
                        <input type="title" name="title" value={title} onChange={this.changeHandler} placeholder="Wpisz tytuł zadania" />
                    </div>
                    <div className="formItem">
                        <input type="content" name="content" value={content} onChange={this.changeHandler} placeholder="Wpisz treść zadania" />
                    </div>
                    <div className="formItem">
                        <input type="priority" name="priority" value={priority} onChange={this.changeHandler} placeholder="Prioritet" />
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


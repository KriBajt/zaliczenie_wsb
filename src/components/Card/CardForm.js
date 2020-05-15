import React, { Component, useState } from 'react'
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

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });


    onSubmit = (e) => {
        axios.put('http://localhost:1028/users/1/taskboards/1/cards', this.state)
            .then(response => {
                let cards = response.data;
                this.setState({ cards: cards });
                //   this.setState({user:user});
            })
            .catch(error => {
            })
    }




    render() {
        const { id, title, content, priority, state, cards } = this.state
        return (
            <div className="formContainer">
                <form onSubmit={this.onSubmit}>
                    <div className="formItem">
                        <input type="title" name="title" value={this.state.title} onChange={this.onChange} placeholder="Wpisz tytuł zadania" />
                    </div>
                    <div className="formItem">
                        <input type="content" name="content" value={this.state.content} onChange={this.onChange} placeholder="Wpisz treść zadania" />
                    </div>
                    <div className="formItem">
                        <input type="priority" name="priority" value={this.state.priority} onChange={this.onChange} placeholder="Prioritet" />
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

// PropTypes
CardForm.propTypes = {
    cards: PropTypes.func.isRequired
}
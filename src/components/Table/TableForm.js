import React, { Component, useState } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { IoIosCloseCircle, IoIosSave } from 'react-icons/io';
import SchowTable from './ShowTable';
import PropTypes from 'prop-types';


export default class TableForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: null,
            title: '',
            description: '',
            tables: []

        }
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        axios.post('http://localhost:1028/api/taskboards/', this.state)
            .then(response => {
                let tables = response.data;
                this.setState({ tables: tables });
                //   this.setState({user:user});
            })
            .catch(error => {
            })

    }




    render() {
        const { id, title, description, tables } = this.state
        return (
            <div className="formContainer">
                <form onSubmit={this.onSubmit}>
                    <div className="formItem">
                        <input type="title" name="title" value={this.state.title} onChange={this.onChange} placeholder="Wpisz tytuł tablicy" />
                    </div>
                    <div className="formItem">
                        <input type="content" name="description" value={this.state.description} onChange={this.onChange} placeholder="Krótki" />
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
TableForm.propTypes = {
    tables: PropTypes.func.isRequired
}
import React, { Component, useState } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { IoIosCloseCircle, IoIosSave } from 'react-icons/io';
import SchowTable from './ShowTable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user.actions'

export default class TableForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            tables: []

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleChange(e) {
        this.setState({
            tables: []
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        const token = this.props.user.token;
        const userID = this.props.user.id;

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const bodyParameters = {
            title: this.state.title,
            description: this.state.description
        };
        axios.post(`http://localhost:1028/users/${userID}/taskboards/`, bodyParameters, config)
            .then(response => {
                // let tables = response.data;
                // this.setState({ tables: tables });
                //   this.setState({user:user});
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }


    sub = (e) => {
        const token = this.props.user.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const userID = this.props.user.id;

        const body = {
            title: "dfsdfsd",
            description: "sfsdfs"
        }

        const res = axios.post(`http://localhost:1028/users/${userID}/taskboards/`, body, config);
    };



    render() {
        const { id, title, description, tables } = this.state

        return (
            <div className="formContainer">
                <form onSubmit={this.handleSubmit} >
                    <div className="formItem">
                        <input type="title" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Wpisz tytuł tablicy" />
                    </div>
                    <div className="formItem">
                        <input type="content" name="description" value={this.state.description} onChange={this.handleChange} placeholder="Krótki" />
                    </div>
                    <div>
                        {/* <Button type="submit" className="ml-0">
                            <IoIosSave />
                        </Button> */}
                        <Button type="submit" className="ml-0">
                            {/* <Button onClick={this.onSubmit} type="submit" className="ml-0"> */}
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

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users,
    };
}

const connectedTableForme = connect(mapStateToProps)(TableForm);
export { connectedTableForme as TableForm };
import React, { Component, useState } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { IoIosCloseCircle, IoIosSave } from 'react-icons/io';
import SchowTable from './ShowTable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user.actions'
import { withRouter } from 'react-router'
// import $ from 'jquery';


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

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    // handleChange(e) {
    //     e.preventDefault();
    //     window.location.reload(false);
    //     this.setState({
    //         tables: []
    //     });
    // }


    handleSubmit(e) {
        // $('.textNewBoard').remove();

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
                let tables = response.data;
                this.setState({ tables: tables });
                //   this.setState({user:user});
                e.preventDefault()
            })
            .catch(error => {
            })

    }



    render() {
        const { id, title, description, tables } = this.state

        return (
            <div className="formContainer">
                <form onSubmit={this.handleSubmit}  >
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
                        <Button type=" submit" className="ml-2">
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

const connectedTableForm = connect(mapStateToProps)(TableForm);
export { connectedTableForm as TableForm };
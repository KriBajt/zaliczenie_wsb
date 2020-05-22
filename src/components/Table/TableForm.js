import React, { Component } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { IoIosSave } from 'react-icons/io';
import { connect } from 'react-redux';


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

    // zmiany w inputach
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    // wysyłanie formularza
    handleSubmit(e) {
        const token = this.props.user.token;
        const userID = this.props.user.id;

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const bodyParameters = {
            title: this.state.title,
            description: this.state.description
        };
        // połączenie z serwerem
        axios.post(`https://ninjaorganizer.azurewebsites.net/users/${userID}/taskboards/`, bodyParameters, config)
            .then(response => {
                let tables = response.data;
                this.setState({ tables: tables });
                e.preventDefault()
            })
            .catch(error => {
            })
    }

    render() {
        return (
            // Formularz dodaania tablic
            <div className="formContainer">
                <form onSubmit={this.handleSubmit}  >
                    <div className="formItem">
                        <input type="title" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Wpisz tytuł tablicy" />
                    </div>
                    <div className="formItem">
                        <input type="content" name="description" value={this.state.description} onChange={this.handleChange} placeholder="Krótki" />
                    </div>
                    <div>
                        <Button type=" submit" className="ml-2">
                            <IoIosSave />
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     const { users, authentication } = state;
//     const { user } = authentication;
//     return {
//         user,
//         users,
//     };
// }

// const connectedTableForm = connect(mapStateToProps)(TableForm);
// export { connectedTableForm as TableForm };
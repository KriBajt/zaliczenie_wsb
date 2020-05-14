import React, { Component } from 'react'
import Registration from './components/auth/Registration';
import Login from './components/auth/login';

export default class Home extends Component {
    constructor(props) {
        super(props);


        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(data) {
        //Todo update parent componen
        this.props.handleLogin(data);
        this.props.history.push("/HomePage");
    }

    render() {
        return (
            <div>
                <h1>Status {this.props.loggedInStatus}</h1>
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />

            </div>
        )
    }
}

import React, { Component } from 'react'
import Registration from './components/auth/Registration';

export default class Home extends Component {
    constructor(props) {
        super(props);


        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(data) {
        //Todo update parent componen
        this.props.handleLogin(data);
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <div>
                <h1>Statusss {this.props.loggedInStatus}</h1>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        )
    }
}

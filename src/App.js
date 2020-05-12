import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import './components/Button/Button.css';
import MainBoard from "./components/MainBoard";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Login from './login2';
import Registration from './components/auth/Registration';
import Dane from './dane';
import CardDetail from './components/Card/CardDetail';
import Menu from './components/Menu/Menu'
import CardLists from './components/CardLists';
import Login from './components/auth/login';
import Dashboard from './Dashboard';
import Home from './Home';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogOut = this.handleLogin.bind(this);
    }

    checkLoginStatus() {
        axios.post("http://localhost:1028/api/users/authenticate", { withCredentials: true }).then(response => {
            // if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
            this.setState({
                loggedInStatus: "LOGGED_IN",
                user: response.data.user  // usunąć useera ?
            })
            // } else if (!response.data.logged_in & this.state.loggedInStatus === "LOGGED_IN"){
            // this.setState({
            //     loggedInStatus: "NOT_LOGGED_IN",
            //     user: {}
            // })
            // }
            console.log("zalogowany?", response);
        }).catch(error => {
            console.log("błędy logowania ", error);
        })
    }


    componentDidMount() {
        this.checkLoginStatus();

    }
    handleLogin(data) {
        this.setState({
            loggedInStatus: "LOGGED_IN",
            data
        })
    }

    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path={"/"} render={props => (
                            <Home {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
                        )} />
                        <Route exact path={"/dashboard"} render={props => (
                            <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
                        )} />

                        <Route path="/login" component={Login} />
                        <Route path="/mainboard" component={MainBoard} />
                        <Route path='/rejestracja' component={Registration} />
                        <Route path="/card-details/" component={CardDetail} />
                        <Route path="/cards/:id" component={CardLists} />

                        <Registration />
                    </Switch>
                </Router>
            </>

        )
    }
}

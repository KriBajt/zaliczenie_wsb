import React, { Component } from 'react'
import ReactDOM from 'react-dom';
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
import Login from './login';
import Dashboard from './Dashboard';

export default class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path='/rejestracja' component={Registration} />
                        <Route path="/card-details/" component={CardDetail} />
                        <Route path="/cards/:id" component={CardLists} />

                        <Route path="/" component={MainBoard} />

                        <Registration />
                        <Login />
                    </Switch>
                </Router>
            </>

        )
    }
}

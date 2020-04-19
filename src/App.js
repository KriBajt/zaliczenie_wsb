import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './App.css';
import './components/Button/Button.css';
import MainBoard from "./components/MainBoard";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './login';
import Register from './register';
import Dane from './dane';
import CardDetail from './components/Card/CardDetail';
import Menu from './components/Menu/Menu'


export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/dane" exact component={Dane} />
                    <Route path="/dane/:id" component={CardDetail} />

                    {/* MainBoard musi być na koncu, inczej sie jebie */}
                    <Route path="/" component={MainBoard} />
                    <Register />
                    <Login />
                </Switch>
            </Router>

        )
    }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';

import TrelloList from '../components/TrelloList';
import TrelloActionButton from "../components/Button/TrelloActionButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import { sort } from "../actions";
import { GiNinjaHead } from 'react-icons/gi';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import BtnCardDetails from '../components/Button/BtnCardDetails'
import CardDetail from '../components/Table/TableDetail'
import ShowTable from '../components/Table/ShowTable';
// coś modal psuje
import Modal from '../components/Modal/Modal';
import '../App.css';

import TableForm from '../components/Table/TableForm';
import axios from "axios";


class HomePage extends React.Component {

    constructor(props) {
        super(props);
    }
    state = {
        tables: [],

    };
    componentDidMount() {
        this.props.dispatch(userActions.getAll());

        const token = this.props.user.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const userID = this.props.user.id;
        axios.get(
            `http://localhost:1028/users/${userID}/taskboards/`,
            config
        ).then(res =>
            this.setState({
                tables: res.data
            })
        )
    }



    // Usuwanie karty
    deleteTable = id => {
        this.props.dispatch(userActions.getAll());
        const token = this.props.user.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const userID = this.props.user.id;

        axios.delete(`http://localhost:1028/users/${userID}/taskboards/${id}`, config).then(res =>
            this.setState({
                tables: [...this.state.tables.filter(table => table.id !== id)]
            })
        );
    };

    setUpdate = (title, id) => {
        const token = this.props.user.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const userID = this.props.user.id;

        axios.put(`http://localhost:1028/users/${userID}/taskboards/${id}`, config)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    //toggle complete
    markComplete = id => {
        this.setState({
            tables: this.state.tables.map(table => {
                if (table.id === id) {
                    table.completed = !table.completed;
                }
                return table;
            })
        });
    };

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users, title } = this.props;

        return (
            <>
                <Menu user={user} />
                <div className="cardCustom">
                </div>

                <div className="tablica">
                    <div className="hello">
                        <p>Cześć!<br></br> {user.firstName} {title}  </p>
                    </div>
                    <div className="container cardCustom">
                        <ShowTable
                            tables={this.state.tables}
                            markComplete={this.markComplete}
                            deleteTable={this.deleteTable}
                            setUpdate={this.setUpdate}
                            onChange={this.handleChange}
                            user={user}
                        />


                    </div>
                </div>
                <div className="container cardCustom">

                </div>

                <Footer />

            </>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users,
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
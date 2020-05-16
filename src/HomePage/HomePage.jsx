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
import { Button } from 'react-bootstrap';
import { IoIosCloseCircle, IoIosSave } from 'react-icons/io';


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

    // sub = (e) => {
    //     const token = this.props.user.token;
    //     const config = {
    //         headers: { Authorization: `Bearer ${token}` }
    //     };

    //     const userID = this.props.user.id;

    //     const body = {
    //         title: "Tytuł tablicy",
    //         description: "Opis tablicy"
    //     }

    //     const res = axios.post('http://localhost:1028/users/1/taskboards/', body, config);
    // };


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

    // onSubmit = (id, token) => {
    //     this.props.dispatch(userActions.getAll());
    //     const config = {
    //         headers: { Authorization: `Bearer ${token}` }
    //     };

    //     axios.post(`http://localhost:1028/users/${id}/taskboards/`, config, this.state)
    //         .then(response => {
    //             let tables = response.data;
    //             this.setState({ tables: tables });
    //             //   this.setState({user:user});
    //             console.log(response);
    //         })
    //         .catch(error => {
    //             console.log('erere')
    //         })
    // }



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
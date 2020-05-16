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
import ShowCard from '../components/Card/ShowCard';
// coś modal psuje
import Modal from '../components/Modal/Modal';
import '../App.css';

import TableForm from '../components/Table/TableForm';
import TableItem from '../components/Table/TableItem';
import axios from "axios";
import { Button } from 'react-bootstrap';
import { IoIosCloseCircle, IoIosSave } from 'react-icons/io';


class CardBoard extends React.Component {

    constructor(props) {
        super(props);
    }
    state = {
        cards: []


    };

    componentDidMount(tableID) {
        const pathID = this.props.location.pathname;
        var str = pathID;
        var n = str.lastIndexOf('/');
        var tableID = str.substring(n + 1);

        const token = this.props.user.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const userID = this.props.user.id;


        axios.get(
            `http://localhost:1028/users/${userID}/taskboards/${tableID}/cards`,
            config
        ).then(res =>
            this.setState({
                cards: res.data
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
        const pathID = this.props.location.pathname;
        var str = pathID;
        var n = str.lastIndexOf('/');
        var tableID = str.substring(n + 1);

        axios.delete(`http://localhost:1028/users/${userID}/taskboards/${tableID}/cards/${id}`, config).then(res =>
            this.setState({
                cards: [...this.state.cards.filter(card => card.id !== id)]
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
            cards: this.state.cards.map(table => {
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

                        <ShowCard
                            key={this.props.card}
                            cards={this.state.cards}
                            markComplete={this.markComplete}
                            deleteCard={this.deleteCard}
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

const connectedCardBoard = connect(mapStateToProps)(CardBoard);
export { connectedCardBoard as CardBoard };
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';

import TrelloList from '../components/TrelloList';
import TrelloActionButton from "../components/Button/TrelloActionButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import { sort } from "../actions";
import { GiNinjaHead } from 'react-icons/gi';
import MenuCard from '../components/Menu/MenuCard';
import Footer from '../components/Footer/Footer';
import BtnCardDetails from '../components/Button/BtnCardDetails'
import CardDetail from '../components/Table/TableDetail'
import ShowCard from '../components/Card/ShowCard';
import ShowCardDone from '../components/Card/ShowCardDone';
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
        this.state = {
            cards: [],
            state: '',
            showing: true,
        };

    }

    componentDidMount() {

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
            `https://ninjaorganizer.azurewebsites.net/users/${userID}/taskboards/${tableID}/cards`,
            config
        ).then(res =>
            this.setState({
                cards: res.data,
                tables: tableID

            })

        )

    }

    // Usuwanie karty
    deleteCard = id => {
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

        axios.delete(`https://ninjaorganizer.azurewebsites.net/users/${userID}/taskboards/${tableID}/cards/${id}`, config).then(res =>
            this.setState({
                cards: [...this.state.cards.filter(card => card.id !== id)]
            })
        );
    };




    setUpdate = id => {

        const token = this.props.user.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const bodyParameters = {
            state: 2
        };

        const userID = this.props.user.id;
        const pathID = this.props.location.pathname;

        var str = pathID;
        var n = str.lastIndexOf('/');
        var tableID = str.substring(n + 1);

        axios.patch(`https://ninjaorganizer.azurewebsites.net/users/${userID}/taskboards/${tableID}/cards/${id}`, bodyParameters, config).then(res =>
            this.setState({
                cards: [...this.state.cards.filter(card => card.id !== id)]
            })
        );
        window.location.reload(false);
    };

    // onSubmit = (id, token) => {
    //     this.props.dispatch(userActions.getAll());
    //     const config = {
    //         headers: { Authorization: `Bearer ${token}` }
    //     };

    //     axios.post(`https://ninjaorganizer.azurewebsites.net/users/${id}/taskboards/`, config, this.state)
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
        const { user, users, title, pathID, state } = this.props;
        const { showing } = this.state;
        return (
            <>
                <MenuCard
                    user={user}
                    tables={this.state.tables}
                    key={this.props.card}
                    history={this.props.history}
                    cards={this.state.cards}

                />

                <div className="cardCustom">
                </div>
                <div className="newTaskTitle "><h4>Zadania do wykonania</h4></div>
                <div className="tablica">
                    <div className=" cardCustom">
                        <div className="col-12 cardCustom">
                            <ShowCard
                                key={this.props.card}
                                cards={this.state.cards}
                                markComplete={this.markComplete}
                                deleteCard={this.deleteCard}
                                setUpdate={this.setUpdate}
                                user={user}
                                history={this.props.history}
                                tableID={this.state.tables}
                            />
                            {/* <button onClick={() => this.setState({ showing: !showing })}>toggle</button>
                            <div style={{ display: (showing ? 'block' : 'none') }}>This is visible</div> */}
                        </div>
                    </div>
                </div>
                <hr></hr>

                <div className="newTaskTitle mt-5"><h4>Zadania wykonane</h4></div>
                <div className="tablicaArch ">
                    <div className="cardCustom col-12">

                        <ShowCardDone
                            key={this.props.card}
                            cards={this.state.cards}
                            markComplete={this.markComplete}
                            deleteCard={this.deleteCard}
                            setUpdate={this.setUpdate}
                            onChange={this.handleChange}
                            user={user}
                            tables={this.props.tables}
                        />
                    </div>
                </div>

                <div className="retunButton">
                    <Link to={'/'}>
                        <Button >
                            ←
                    </Button>
                    </Link>
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
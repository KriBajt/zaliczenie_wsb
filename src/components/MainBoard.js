import React, { Component } from 'react';
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./Button/TrelloActionButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import { sort } from "../actions";
import { GiNinjaHead } from 'react-icons/gi';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';
import Dane from './../dane';
import BtnCardDetails from './Button/BtnCardDetails'
import CardDetail from './Card/CardDetail'

import ShowCard from './Card/ShowCard';
// import SendDataToApi from './Card/SendDataToApi';
import CardForm from './../components/Card/CardForm';
import axios from "axios";


class MainBoard extends Component {
    state = {
        cards: []
    };

    componentDidMount() {
        axios
            .get("http://localhost:1028/api/taskboards/3/cards")
            .then(res =>
                this.setState({
                    cards: res.data
                })
            );
    }

    //toggle complete
    markComplete = id => {
        this.setState({
            cards: this.state.cards.map(card => {
                if (card.id === id) {
                    card.completed = !card.completed;
                }
                return card;
            })
        });
    };

    // Usuwanie karty
    deleteCard = id => {
        axios.delete(`http://localhost:1028/api/taskboards/3/cards/${id}`).then(res =>
            this.setState({
                cards: [...this.state.cards.filter(card => card.id !== id)]
            })
        );
    };


    render() {
        return (
            <>
                <Menu />
                <div className="container cardCustom">
                </div>
                <div className="container cardCustom">
                    <ShowCard
                        cards={this.state.cards}
                        markComplete={this.markComplete}
                        deleteCard={this.deleteCard} />
                </div>
                <Footer />
            </>
        )
    }
}

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(MainBoard);
import React, { Component } from 'react';
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./Button/TrelloActionButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import { sort } from "../actions";
import { GiNinjaHead } from 'react-icons/gi';
import MenuCard from './Menu/MenuCard';
import Footer from './Footer/Footer';
import Dane from '../dane';
import BtnCardDetails from './Button/BtnCardDetails'
import CardDetail from './Card/CardDetail'
import ShowCard from './Card/ShowCard';
// import SendDataToApi from './Card/SendDataToApi';
import CardForm from './Card/CardForm';
import axios from "axios";


class CardLists extends Component {
    state = {
        cards: []
    };

    componentDidMount() {
        axios
            .get(`http://localhost:1028/api/users/1/taskboards/1/cards`)
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
        axios.delete(`http://localhost:1028/api/users/1/taskboards/1/cards/${id}`).then(res =>
            this.setState({
                cards: [...this.state.cards.filter(card => card.id !== id)]
            })
        );
    };

    // addCard = cards => {
    //     axios
    //         .post("http://localhost:1028/api/taskboards/3/cards", {
    //             cards,
    //             completed: false
    //         })
    //         .then(res => this.setState({ cards: [...this.state.cards, res.data] }));
    // };

    render() {
        return (
            <>
                <MenuCard />
                <div className="container cardCustom">
                </div>
                <div className="container cardCustom">
                    <ShowCard
                        cards={this.state.cards}
                        markComplete={this.markComplete}
                        deleteCard={this.deleteCard}


                    />
                </div>
                <Footer />
            </>
        )
    }
}

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(CardLists);
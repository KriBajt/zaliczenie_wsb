import React, { Component } from 'react'
import './CardDetail.css';
import CardItemDone from './CardItemDone';
import { connect } from 'react-redux';

export default class ShowCardDone extends Component {

    constructor(props) {
        super(props);

        this.keyCount = 0;
        this.getKey = this.getKey.bind(this);
    }
    // dodawanie randomowego klicza do listy (oszukiwanie reacta i usuwanie ostrzeżeń)

    getKey() {
        return this.keyCount++;
    }

    render() {

        // listowanie kart wykonanych
        return this.props.cards.filter(card => card.state > 2).map(card => (
            <CardItemDone
                key={this.getKey()}
                // key={this.props.card}
                markcomplete={this.props.markcomplete}
                deleteCard={this.props.deleteCard}
                setUpdate={this.setUpdate}
                card={card}
                user={this.props.user}
            />
        ));
    }
}

import React, { Component } from 'react'
import './CardDetail.css';
import CardItem from './CardItem';
import { connect } from 'react-redux';

export default class ShowCard extends Component {
    constructor(props) {
        super(props);

        this.keyCount = 0;
        this.getKey = this.getKey.bind(this);
    }
    // dodawanie klucza do itemów
    getKey() {
        return this.keyCount++;
    }

    render() {
        // listowanie zadań
        return this.props.cards.filter(card => card.state < 3).map(card => (
            <CardItem
                key={this.getKey()}
                markcomplete={this.props.markcomplete}
                deleteCard={this.props.deleteCard}
                setUpdate={this.props.setUpdate}
                card={card}
                user={this.props.user}
                tables={this.props.tableID}
            />
        ));
    }
}


import React, { Component, useState, useEffect } from 'react'
import './CardDetail.css';
import BtnCardDetails from '../Button/BtnCardDetails';
import { BsFillTrashFill } from 'react-icons/bs';
import axios from "axios";
import CardItem from './CardItem';
import PropTypes from 'prop-types';


export default class showCard extends Component {

    // const fetchItems = async ()=>{
    //     const data =  await fetch()
    // }
    render() {
        return this.props.cards.map(card => (
            <CardItem
                key={card.id}
                markComplete={this.props.markComplete}
                deleteCard={this.props.deleteCard}
                card={card}

            />
        ));
    }
}

//PropTypes

showCard.propTypes = {
    cards: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired
};




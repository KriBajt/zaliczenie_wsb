import React, { Component, useState, useEffect } from 'react'
import './CardDetail.css';
import BtnCardDetails from '../Button/BtnCardDetails';
import { BsFillTrashFill } from 'react-icons/bs';
import axios from "axios";
import CardItem from './CardItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user.actions';

export default class ShowCard extends Component {

    // const fetchItems = async ()=>{
    //     const data =  await fetch()
    // }
    render() {

        return this.props.cards.map(card => (
            <CardItem
                key={this.props.card}
                markComplete={this.props.markComplete}
                deleteCard={this.props.deleteCard}
                setUpdate={this.props.setUpdate}
                card={card}
                user={this.props.user}

            />
        ));
    }
}

//PropTypes

ShowCard.propTypes = {
    cards: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    setUpdate: PropTypes.func.isRequired,

};



function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedShowCard = connect(mapStateToProps)(ShowCard);
export { connectedShowCard as ShowCard };
import React, { Component, useState, useEffect } from 'react'
import './CardDetail.css';
import BtnCardDetails from '../Button/BtnCardDetails';
import { BsFillTrashFill } from 'react-icons/bs';
import axios from "axios";
import CardItemDone from './CardItemDone';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user.actions';

export default class ShowCardDone extends Component {

    // const fetchItems = async ()=>{
    //     const data =  await fetch()
    // }
    render() {

        return this.props.cards.filter(card => card.state > 1).map(card => (
            <CardItemDone
                key={this.props.card}
                markComplete={this.props.markComplete}
                deleteCard={this.props.deleteCard}
                setUpdate={this.setUpdate}
                card={card}
                user={this.props.user}
            />
        ));
    }
}

//PropTypes

// ShowCardDone.propTypes = {
//     cards: PropTypes.array.isRequired,
//     markComplete: PropTypes.func.isRequired,
//     deleteCard: PropTypes.func.isRequired,
//     onChange: PropTypes.func.isRequired,

// };



function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedShowCardDone = connect(mapStateToProps)(ShowCardDone);
export { connectedShowCardDone as ShowCardDone };
import React, { Component } from 'react'
import PropTypes from "prop-types";
import './CardDetail.css';
import BtnCardDetails from '../Button/BtnCardDetails';
import { BsFillTrashFill } from 'react-icons/bs';
import axios from "axios";
import { users } from '../../reducers/users.reducer';
import { Link } from 'react-router-dom';
import FlipMove from 'react-flip-move';

import Button from '@material-ui/core/Button';



export default class CardItem extends Component {
    render() {
        const { id, title, content, priority, state, niski } = this.props.card;
        const userID = this.props.user.id;


        return (
            <div id={id}>
                <div className="cardCustomList text-white mb-3">
                    <div className="card-header" >
                        <h5 className="card-title" onChange={this.props.markComplete.bind(this, id)} key={title}>{title}</h5>
                        <div className="btnDetails btnDelete">
                            <BsFillTrashFill onClick={this.props.deleteCard.bind(this, id)} />
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-text" onChange={this.props.markComplete.bind(this, id)}>{content}</p>

                    </div>
                    <div className="card-footer">
                        <p></p>
                        <div className="btnDetails d-flex ">
                            {/* <BtnCardDetails /> */}
                        </div>
                        <p className="card-text" onChange={this.props.markComplete.bind(this, id)}>Prioritet: {priority}</p>
                        <p className="card-text" onChange={this.props.markComplete.bind(this, id)}>Status: {state}</p>
                        <button className="btn-primary" onClick={this.props.setUpdate.bind(this, id)} > ✓ </button>

                    </div>

                </div >
            </div >
        )
    }
}

// PropTypes
CardItem.propTypes = {
    card: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
    setUpdate: PropTypes.func.isRequired
}
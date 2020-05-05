import React, { Component } from 'react'
import PropTypes from "prop-types";
import './CardDetail.css';
import BtnCardDetails from '../Button/BtnCardDetails';
import { BsFillTrashFill } from 'react-icons/bs';
import axios from "axios";

export default class CardItem extends Component {
    render() {
        const { id, title, content, priority, state } = this.props.card;

        return (
            <div>
                <div className="cardCustomList text-white mb-3">
                    <div className="card-header">
                        <h5 className="card-title" key={title}>{title}</h5>
                        <div className="btnDetails btnDelete">
                            <BsFillTrashFill onClick={this.props.deleteCard.bind(this, id)} />
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{content}</p>

                        <p className="card-text">Prioritet: {priority}</p>
                        <p className="card-text">Status: {state}</p>
                    </div>

                    <div className="card-footer">
                        <p></p>
                        <div className="btnDetails d-flex ">
                            <BtnCardDetails />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

// //PropTypes
// CardItem.propTypes = {
//     cards: PropTypes.object.isRequired
// };

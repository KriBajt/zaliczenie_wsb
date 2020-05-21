import React, { Component } from 'react'
import PropTypes from "prop-types";
import './CardDetail.css';
import BtnCardDetails from '../Button/BtnCardDetails';
import { BsFillTrashFill } from 'react-icons/bs';
import axios from "axios";
import { users } from '../../reducers/users.reducer';
import { Link } from 'react-router-dom';
import FlipMove from 'react-flip-move';

import { AiFillEdit } from 'react-icons/ai';

import Button from '@material-ui/core/Button';
import { GiThompsonM1 } from 'react-icons/gi';
import CardModal from './CardModal'
import Nav from 'react-bootstrap/Nav';

export default class CardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            addModalShow: false

        };
    }


    render() {
        const { id, title, content, priority, state, niski, card, user } = this.props.card;
        const userID = this.props.user.id;
        // const tableID = this.props.user.table.id;

        let addModalClose = () => {
            this.setState({ addModalShow: false });
            window.location.reload(false);


        }


        return (
            <div id={this.props.card.id}>
                <div className="cardCustomList text-white mb-3">
                    <div className="card-header" >
                        <h5 className="card-title" onChange={this.props.markComplete.bind(this, id)} key={title}>{title}</h5>


                    </div>
                    <div className="card-body">
                        <p className="card-text" onChange={this.props.markComplete.bind(this, id)}>{content}</p>

                    </div>
                    <div className="card-footer">
                        <p></p>
                        <div className="btnDetails d-flex ">
                            {/* <BtnCardDetails
                                user={user}
                                key={card}
                                card={this.props.card}

                            /> */}

                        </div>
                        <p className="card-text" onChange={this.props.markComplete.bind(this, id)}>Prioritet: {priority}</p>
                        <p className="card-text" onChange={this.props.markComplete.bind(this, id)}>Status: {state}</p>
                        <Nav className="acceptBtnEdit">
                            <button
                                onClick={() => this.setState({ addModalShow: true })}> ✎
                            </button>
                            <CardModal
                                user={this.props.user}
                                show={this.state.addModalShow}
                                onHide={addModalClose}
                                key={this.props.card}
                                markComplete={this.props.markComplete}
                                deleteCard={this.props.deleteCard}
                                setUpdate={this.props.setUpdate}
                                card={this.props.card.id}
                                id={this.props.card.id}
                                table={this.props.tables}
                                onHide={addModalClose}
                            />
                        </Nav>
                        <div className="acceptBtn">
                            <button onClick={this.props.setUpdate.bind(this, id)} > ✓ </button>
                        </div>
                        <div className="btnDetails btnDelete">
                            <BsFillTrashFill onClick={this.props.deleteCard.bind(this, id)} />
                        </div>


                    </div>

                </div>
            </div >
        )
    }
}

// // PropTypes
// CardItem.propTypes = {
//     // card: PropTypes.object.isRequired,
//     table: PropTypes.object.isRequired,
//     markComplete: PropTypes.func.isRequired,
//     deleteCard: PropTypes.func.isRequired,
//     setUpdate: PropTypes.func.isRequired
// }
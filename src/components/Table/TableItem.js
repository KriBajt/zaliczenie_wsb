import React, { Component } from 'react'
import PropTypes from "prop-types";
import './TableDetail.css';
import BtnCardDetails from '../Button/BtnCardDetails';
import { BsFillTrashFill } from 'react-icons/bs';
import axios from "axios";
import { Link } from 'react-router-dom';
// import CardList from '../CardList';
import FlipMove from 'react-flip-move';
import { users } from '../../reducers/users.reducer';


export default class TableItem extends Component {
    render() {
        const { id, title, description, cardsID } = this.props.table;
        const userID = this.props.user.id;

        return (
            <div>

                <div className="cardCustomList text-white mb-3">
                    <div className="card-header">
                        <FlipMove duration={300} easing="ease-in-out">

                            <input type="text" className="card-title" onChange={this.handleChange} key={title} value={title}></input>
                        </FlipMove>

                        <div className="btnDetails btnDelete">
                            <BsFillTrashFill onClick={this.props.deleteTable.bind(this, id)} />
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-text" onChange={this.props.markComplete.bind(this, id)}>Opis: {description}</p>
                    </div>
                    <div className="card-footer">
                        <p></p>
                        <Link to={`/users/${userID}/taskboards/${id}/cards/`} > Lista zadań </Link>
                        <div className="btnDetails d-flex ">
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

// PropTypes
TableItem.propTypes = {
    table: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTable: PropTypes.func.isRequired,
    setUpdate: PropTypes.func.isRequired,

}


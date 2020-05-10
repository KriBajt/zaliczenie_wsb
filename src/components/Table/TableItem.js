import React, { Component } from 'react'
import PropTypes from "prop-types";
import './TableDetail.css';
import BtnCardDetails from '../Button/BtnCardDetails';
import { BsFillTrashFill } from 'react-icons/bs';
import axios from "axios";
import { Link } from 'react-router-dom';
// import CardList from '../CardList';

export default class TableItem extends Component {
    render() {
        const { id, title, description } = this.props.table;


        return (
            <div>
                <div className="cardCustomList text-white mb-3">

                    <div className="card-header">
                        <h5 className="card-title" onChange={this.props.markComplete.bind(this, id)} key={title}>{title}</h5>
                        <div className="btnDetails btnDelete">
                            <BsFillTrashFill onClick={this.props.deleteTable.bind(this, id)} />
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-text" onChange={this.props.markComplete.bind(this, id)}>{title}</p>
                        <p className="card-text" onChange={this.props.markComplete.bind(this, id)}>Opis: {description}</p>
                    </div>

                    <div className="card-footer">
                        <p></p>
                        <Link to={`/cards/${id}`} > Lista zadań </Link>
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
    deleteTable: PropTypes.func.isRequired
}
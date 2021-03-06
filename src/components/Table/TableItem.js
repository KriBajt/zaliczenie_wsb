import React, { Component } from 'react'
import './TableDetail.css';
import { BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import CardList from '../CardList';
import FlipMove from 'react-flip-move';


export default class TableItem extends Component {
    render() {
        const { id, title, description } = this.props.table;
        const tableID = this.props.table.id;
        return (
            // pojedyncza tablica z linkiem do zadań
            <div>
                <div className="cardCustomList text-white mb-3">
                    <div className="card-header">
                        <FlipMove duration={300} easing="ease-in-out">
                            <h2 className="card-title" key={title} >{title}</h2>
                        </FlipMove>
                    </div>
                    <div className="card-body">
                        <p className="card-text" onChange={this.props.markcomplete.bind(this, id)}>Opis: {description}</p>
                    </div>
                    <div className="card-footer">
                        {/* link do zadań  */}
                        <Link to={`/taskboards/${tableID}`} > Lista zadań </Link>
                        <div className="btnDetails btnDelete">
                            <button className="button-delete-item" onClick={this.props.deleteTable.bind(this, id)}>Usuń ✗</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}


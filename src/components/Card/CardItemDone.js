import React, { Component } from 'react'
import './CardDetail.css';
import { BsFillTrashFill } from 'react-icons/bs';




export default class CardItemDone extends Component {
    render() {
        const { id, title, content, priority, state } = this.props.card;

        return (
            <div>
                <div className="cardCustomList arch text-white mb-3">
                    <div className="card-header">
                        <h5 className="card-title" onChange={this.props.markcomplete.bind(this, id)}>{title}</h5>
                        <div className="btnDetails btnDelete">
                            <BsFillTrashFill onClick={this.props.deleteCard.bind(this, id)} />
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-text" onChange={this.props.markcomplete.bind(this, id)}>{content}</p>


                    </div>

                    <div className="card-footer">
                        <p></p>
                        <div className="btnDetails d-flex ">
                            {/* <BtnCardDetails /> */}
                        </div>
                        <p className="card-text" onChange={this.props.markcomplete.bind(this, id)}>Prioritet: {priority}</p>
                        <p className="card-text" onChange={this.props.markcomplete.bind(this, id)}>Status: {state}</p>
                    </div>

                </div>
            </div>
        )
    }
}

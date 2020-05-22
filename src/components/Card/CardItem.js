import React, { Component } from 'react'
import './CardDetail.css';
import { BsFillTrashFill } from 'react-icons/bs';


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
        const { id, title, content, priority, state } = this.props.card;

        let addModalClose = () => {
            this.setState({ addModalShow: false });
            window.location.reload(false);
        }

        return (
            <div id={this.props.card.id}>
                <div className="cardCustomList text-white mb-3">
                    <div className="card-header" >
                        <h5 className="card-title" onChange={this.props.markcomplete.bind(this, id)} key={title}>{title}</h5>
                        <Nav className="acceptBtnEdit">

                            <button
                                onClick={() => this.setState({ addModalShow: true })}> ✎
                            </button>
                        </Nav>

                    </div>
                    <div className="card-body">
                        <p className="card-text" onChange={this.props.markcomplete.bind(this, id)}>{content}</p>

                    </div>
                    <div className="card-footer">
                        <p></p>
                        <div className="btnDetails d-flex "></div>

                        <p className="card-text" onChange={this.props.markcomplete.bind(this, id)}>Prioritet {priority}</p>
                        <p className="card-text" onChange={this.props.markcomplete.bind(this, id)}>Status {state}</p>
                        <Nav className="acceptBtnEdit">

                            {/* <button
                                onClick={() => this.setState({ addModalShow: true })}> ✎
                            </button> */}

                            <CardModal
                                user={this.props.user}
                                show={this.state.addModalShow}
                                onHide={addModalClose}
                                key={this.props.card}
                                card={this.props.card.id}
                                id={this.props.card.id}
                                table={this.props.tables}
                            />
                        </Nav>
                        <div className="acceptBtn">
                            <button onClick={this.props.setUpdate.bind(this, id)} > ✓ </button>
                        </div>
                        <div className="btnDetails btnDelete">
                            <button className="deleteBtn" onClick={this.props.deleteCard.bind(this, id)}> ✗ </button>
                        </div>


                    </div>

                </div>
            </div >
        )
    }
}


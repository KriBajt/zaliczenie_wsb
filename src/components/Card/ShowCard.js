import React, { Component } from 'react'
import './CardDetail.css';
import BtnCardDetails from '../Button/BtnCardDetails';
import { BsFillTrashFill } from 'react-icons/bs';

export default class showCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            cards: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:1028/api/taskboards/3/cards")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        cards: result
                    });
                },
                // Uwaga: to ważne, żeby obsłużyć błędy tutaj, a
                // nie w bloku catch(), aby nie przetwarzać błędów
                // mających swoje źródło w komponencie.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    deleteCard(id) {
        if (window.confirm('Czy jesteś pewien?')) {
            fetch('http://localhost:1028/api/taskboards/3/cards/' + id, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }



    render() {
        const { error, isLoaded, cards } = this.state;
        if (error) {
            return <div>Błąd: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Ładowanie...</div>;
        } else {
            return (
                <>
                    {cards.map(item => (
                        <div className="cardCustomList text-white mb-3">
                            <div className="card-header">
                                <h5 className="card-title" key={item.title}>{item.title}</h5>
                                <div className="btnDetails btnDelete">
                                    <BsFillTrashFill onClick={() => this.deleteCard(item.id)} />
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{item.content}</p>
                                <p className="card-text">{item.priority}</p>
                                <p className="card-text">{item.state}</p>
                                <div className="float-right mb-3">
                                    <BtnCardDetails />
                                </div>

                            </div>

                        </div>
                    ))}
                </>
            );
        }
    }
}



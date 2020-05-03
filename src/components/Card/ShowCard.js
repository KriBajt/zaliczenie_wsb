import React, { Component } from 'react'
import './CardDetail.css';
import BtnCardDetails from '../Button/BtnCardDetails';


export default class showCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch("http://localhost:1028/api/taskboards/3/cards")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
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

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Błąd: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Ładowanie...</div>;
        } else {
            return (
                <>
                    {items.map(item => (
                        <div className="cardCustomList text-white mb-3">
                            <div className="card-header">
                                <h5 className="card-title" key={item.title}>{item.title}</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{item.content}</p>
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



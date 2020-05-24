import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";
import { IoIosSave } from 'react-icons/io';
import RRS from 'react-responsive-select';

export default class CardModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            card: [],
            table: [],
            title: '',
            content: '',
            priority: '',
            state: '',
            cards: [],

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        var tableID = this.props.table;
        const token = this.props.user.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const userID = this.props.user.id;

        axios.get(
            `https://ninjaorganizer.azurewebsites.net/users/${userID}/taskboards/${tableID}/cards`,
            config, { timeout: 2 }
        ).then(res =>
            this.setState({
                cards: res.data
            })
        )
    }

    // odczyt z inptów formularza prioritet i status
    onChange(e) {
        this.setState({
            priority: e.target.name.priority,
            state: e.target.name.state,
        })
    }

    // wysyłanie formularza na serwer po edycji zadania
    handleSubmit = (e) => {
        var tableID = this.props.table;
        const userID = this.props.user.id;
        const token = this.props.user.token;

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const bodyParameters = {
            title: this.state.title,
            content: this.state.content,
            priority: this.state.priority,
            state: this.state.state,
        };

        const cardID = this.props.id;

        axios.patch(`https://ninjaorganizer.azurewebsites.net/users/${userID}/taskboards/${tableID}/cards/${cardID}`, bodyParameters, config, { timeout: 2 })
            .then(response => {
                let cards = response.data;
                this.setState({ cards: cards });
            })
            .catch(error => {
                console.log(this.props)
            })

        e.preventDefault()
        setTimeout(function () { window.location.reload(true); }, 600);

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    render() {
        const { title, content, state, priority } = this.state
        return (

            // formularz edycji zadań
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edycja zadania:
                    </Modal.Title>
                </Modal.Header>
                <form onSubmit={this.handleSubmit} >
                    <div className="cardModalEdit ">
                        <input type="title" name="title" value={title} onChange={this.handleChange} placeholder="Wpisz tytuł zadania" />
                        <input type="content" name="content" value={content} onChange={this.handleChange} placeholder="Wpisz treść zadania" />
                        <div className="formItem selectBoxCusModal">
                            <select name="state" value={state} onChange={this.handleChange} >
                                <option>Status..</option>
                                <option value="1">Do zrobienia</option>
                                <option value="2">W procesie</option>
                                <option value="3">Zakończone</option>
                            </select>
                        </div>
                        <div className="formItem mr-2 selectpicker selectBoxCusModal ">
                            <select name="priority" value={priority} onChange={this.handleChange} >
                                <option>Prioritet..</option>
                                <option value="1">Niski</option>
                                <option value="2">Średni</option>
                                <option value="3">Wysoki</option>
                            </select>
                        </div>
                    </div>
                    <Modal.Footer>
                        <Button type="submit" className="ml-2" onClick={this.props.onHide}>
                            <IoIosSave />
                        </Button>
                    </Modal.Footer>
                </form >
            </Modal >
        )
    }
}


import React, { Component } from 'react'
import { connect } from 'react-redux';
import { userActions } from '../../actions'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import axios from "axios";

export default class CardModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            card: []

        };
    }


    componentDidMount() {
        console.log(this.props)

        const token = this.props.user.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const userID = this.props.user.id;

        axios.get(
            `http://localhost:1028/users/${userID}/`,
            config
        ).then(res =>
            this.setState({
                users: res.data
            })

        )
    }


    render() {

        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Nazwa użytkownika:
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input>Liczba aktywnych tablic:  </input>
                    <p>Liczba aktywnych zadań: </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Zamknij</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
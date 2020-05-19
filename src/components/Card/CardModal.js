import React, { Component } from 'react'
import { connect } from 'react-redux';
import { userActions } from '../../actions'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import axios from "axios";
import { IoIosCloseCircle, IoIosSave } from 'react-icons/io';

export default class CardModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            card: [],
            title: '',
            content: '',
            priority: '',
            state: 1,
            cards: [],

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

    // handleSubmit(e) {
    //     const pathID = this.props.history.location.pathname;
    //     var str = pathID;
    //     var n = str.lastIndexOf('/');
    //     var tableID = str.substring(n + 1);

    //     const userID = this.props.user.id;
    //     const token = this.props.user.token;

    //     const config = {
    //         headers: { Authorization: `Bearer ${token}` }
    //     };

    //     const bodyParameters = {
    //         title: this.state.title,
    //         content: this.state.content,
    //         priority: this.state.priority,
    //         state: this.state.state
    //     };

    //     axios.post(`http://localhost:1028/users/${userID}/taskboards/${tableID}/cards/`, bodyParameters, config)
    //         .then(response => {
    //             let cards = response.data;
    //             this.setState({ cards: cards });
    //             //   this.setState({user:user});
    //         })
    //         .catch(error => {
    //         })

    // }


    render() {
        console.log(this.props)
        const { id, title, content, priority, state, cards } = this.state

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
                    <form onSubmit={this.handleSubmit} >
                        <div className="formItem">
                            <input type="title" name="title" value={title} placeholder="Wpisz tytuł zadania" />
                        </div>
                        <div className="formItem">
                            <input type="content" name="content" value={content} placeholder="Wpisz treść zadania" />
                        </div>

                        <div>
                            <Button type="submit" className="ml-2">
                                <IoIosSave />
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Zamknij</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
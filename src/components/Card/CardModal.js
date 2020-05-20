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
            table: [],
            title: '',
            content: '',
            priority: '',
            state: 1,
            cards: [],

        };

    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleInputChange = (event) => {
        event.preventDefault()

        this.setState({
            [event.target.name]: event.target.value
        })


    }
    componentDidMount() {

        // const pathID = this.props.location.pathname;
        // var str = pathID;
        // var n = str.lastIndexOf('/');
        // var tableID = str.substring(n + 1);

        const token = this.props.user.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const userID = this.props.user.id;

        axios.get(
            `http://localhost:1028/users/${userID}/taskboards/5206/cards`,
            config
        ).then(res =>
            this.setState({
                cards: res.data
            })

        )

    }


    // componentDidMount() {
    //     // console.log(this.props)

    //     const token = this.props.user.token;
    //     const config = {
    //         headers: { Authorization: `Bearer ${token}` }
    //     };
    //     const userID = this.props.user.id;

    //     axios.get(
    //         `http://localhost:1028/users/${userID}/`,
    //         config
    //     ).then(res =>
    //         this.setState({
    //             users: res.data
    //         })

    //     )
    // }

    handleSubmit = (e) => {

        const pathID = this.props.history.location.pathname;
        var str = pathID;
        var n = str.lastIndexOf('/');
        var tableID = str.substring(n + 1);

        const userID = this.props.user.id;
        const token = this.props.user.token;

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const bodyParameters = {
            title: this.state.title,
            content: this.state.content,

        };


        axios.patch(`http://localhost:1028/users/${userID}/taskboards/2194/cards/`, bodyParameters, config)
            .then(response => {
                let cards = response.data;
                this.setState({ cards: cards });
            })
            .catch(error => {
            })
    }

    render() {
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
                        Edycja zadania:
                    </Modal.Title>
                </Modal.Header>
                <form onSubmit={this.handleSubmit}>
                    <div className="cardModalEdit">
                        <input type="title" name="title" onChange={this.handleInputChange} placeholder="Wpisz tytuł zadania" />
                        <input type="content" name="content" onChange={this.handleInputChange} placeholder="Wpisz treść zadania" />
                    </div>
                    <Modal.Footer>
                        <Button type="submit" className="ml-2" >
                            <IoIosSave />
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        )
    }
}
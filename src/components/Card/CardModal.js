import React, { Component } from 'react'
import { connect } from 'react-redux';
import { userActions } from '../../actions'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import axios from "axios";
import { IoIosCloseCircle, IoIosSave } from 'react-icons/io';
import { history } from '../../helpers/history';
import { sort } from "../../actions";


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

    componentDidMount() {

        // const pathID = this.props.history.location.pathname;
        // var str = pathID;
        // var n = str.lastIndexOf('/');
        // var tableID = str.substring(n + 1);
        var tableID = this.props.table;

        const token = this.props.user.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const userID = this.props.user.id;

        axios.get(
            `https://ninjaorganizer.azurewebsites.net/users/${userID}/taskboards/${tableID}/cards`,
            config
        ).then(res =>
            this.setState({
                cards: res.data
            })

        )

    }


    handleSubmit = (e) => {
        e.preventDefault()
        var tableID = this.props.table;
        const userID = this.props.user.id;
        const token = this.props.user.token;

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const bodyParameters = {
            title: this.state.title,
            content: this.state.content,
        };

        const cardID = this.props.id;

        axios.patch(`https://ninjaorganizer.azurewebsites.net/users/${userID}/taskboards/${tableID}/cards/${cardID}`, bodyParameters, config)
            .then(response => {
                let cards = response.data;
                this.setState({ cards: cards });
            })
            .catch(error => {
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
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
                <form onSubmit={this.handleSubmit} >
                    <div className="cardModalEdit">
                        <input type="title" name="title" value={title} onChange={this.handleChange} placeholder="Wpisz tytuł zadania" />
                        <input type="content" name="content" value={content} onChange={this.handleChange} placeholder="Wpisz treść zadania" />
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

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users,
    };
}

const connectedCardModal = connect(mapStateToProps)(CardModal);
export { connectedCardModal as CardModal };
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
            config
        ).then(res =>
            this.setState({
                cards: res.data
            })

        )

    }

    onChange(e) {
        this.setState({
            priority: e.target.value
        })
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
            priority: this.state.priority,
            state: this.state.state,
        };

        const cardID = this.props.id;

        axios.patch(`https://ninjaorganizer.azurewebsites.net/users/${userID}/taskboards/${tableID}/cards/${cardID}`, bodyParameters, config)
            .then(response => {
                let cards = response.data;
                this.setState({ cards: cards });
                console.log(this.props)
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
                    <div className="cardModalEdit ">


                        <input type="title" name="title" value={title} onChange={this.handleChange} placeholder="Wpisz tytuł zadania" />

                        <input type="content" name="content" value={content} onChange={this.handleChange} placeholder="Wpisz treść zadania" />

                        <select name="state" value={state} onChange={this.handleChange} className="selectBoxCus col-4">
                            <option>Status...</option>
                            <option state="0">Niski</option>
                            <option state="1">Średni</option>
                            <option state="2">Wysoki</option>
                        </select>

                        <select value={this.state.value} onChange={this.onChange.bind(this)} className="selectBoxCus col-4">
                            <option>Prioritet..</option>
                            <option value="0">Niski</option>
                            <option value="1">Średni</option>
                            <option value="2">Wysoki</option>
                        </select>
                    </div>


                    <Modal.Footer>
                        <Button type="submit" className="ml-2" onClick={this.props.onHide}>
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
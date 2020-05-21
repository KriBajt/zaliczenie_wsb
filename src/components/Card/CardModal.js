import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";
import { IoIosSave } from 'react-icons/io';


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

            })
            .catch(error => {
                console.log(this.props)

            })


    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    render() {
        const { title, content, state, priority } = this.state

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

                        <input type="number" name="state" value={state} onChange={this.handleChange} placeholder="Wybierz stan ( 0, 1, 2)" />
                        <input type="number" name="priority" value={priority} onChange={this.handleChange} placeholder="Wybierz prioritet (0, 1, 2)" />

                        {/* <select name="state" type="number" value={state} onChange={this.handleChange} className="selectBoxCus-2 col-4">
                            <option>Status...</option>
                            <option value="0">Niski</option>
                            <option value="1">Średni</option>
                            <option value="2">Wysoki</option>
                        </select>

                        <select name="priority" type="number" onChange={this.handleChange} className="selectBoxCus-2 col-4">
                            <option>Prioritet..</option>
                            <option value="0">Niski</option>
                            <option value="1">Średni</option>
                            <option value="2">Wysoki</option>
                        </select> */}
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
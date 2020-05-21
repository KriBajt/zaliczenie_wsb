import React, { Component } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { IoIosSave } from 'react-icons/io';
import { connect } from 'react-redux';

export default class CardForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // id: null,
            title: '',
            content: '',
            priority: '',
            state: 1,
            cards: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            priority: e.target.value
        })
    }


    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {

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
            priority: this.state.priority,
            state: this.state.state
        };

        axios.post(`https://ninjaorganizer.azurewebsites.net/users/${userID}/taskboards/${tableID}/cards/`, bodyParameters, config)
            .then(response => {
                let cards = response.data;
                this.setState({ cards: cards });
            })
            .catch(error => {
                console.log(error)
            })

    }


    render() {
        const { title, content } = this.state

        return (
            <div className="formContainer">
                <form onSubmit={this.handleSubmit} >
                    <div className="formItem ">
                        <input type="title" name="title" value={title} onChange={this.handleChange} placeholder="Wpisz tytuł zadania" />
                    </div>
                    <div className="formItem">
                        <input type="content" name="content" value={content} onChange={this.handleChange} placeholder="Wpisz treść zadania" />
                    </div>
                    <div className="formItem mr-2 selectBoxCus selectpicker">
                        <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control selectBoxCus">

                            <option>Prioritet..</option>
                            <option value="0">Niski</option>
                            <option value="1">Średni</option>
                            <option value="2">Wysoki</option>
                        </select>
                    </div>
                    <div>
                        <Button type="submit" className="ml-2" onClick={this.props.onHide}>
                            <IoIosSave />
                        </Button>
                    </div>
                </form>
            </div >
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

const connectedCardForm = connect(mapStateToProps)(CardForm);
export { connectedCardForm as CardForm };
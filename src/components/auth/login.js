import React, { Component } from 'react'
import './../../App.css'
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GiNinjaHead } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';


export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: '',
            Password: ''

        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // funkcja odpowiadająca za zmiany w inputach
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // funkcja odpowiadająca za wysyłanie formularza logowania
    handleSubmit(event) {

        const {
            Username,
            Password
        } = this.state

        // połączenie z bazą
        axios.post("https://ninjaorganizer.azurewebsites.net/users/authenticate", {
            Username: Username,
            Password: Password,

        },
            { withCredentials: true }
        ).then(response => {
            // console.log("res from login", response);

            // if (response.data.logged_in === "true") {
            this.props.handleSuccessfulAuth(response.data);
            // }
        }).catch(error => {
            // console.log("login error", error);
        })
        event.preventDefault();
    }

    render() {
        return (
            // renderowanie formularza
            <form onSubmit={this.handleSubmit}>
                <div className={'authBox'} >
                    <div className={'leftBox'}>
                        < div className={'bgGreen'} />
                        <div className={'imageAuth'} />
                        <div className={'imageText bold style1'}>NinjaTask<GiNinjaHead /></div>
                        <div className={'imageText style2'}>Lepsza strona zarządzania!</div>
                    </div>
                    <div className={'rightBoxLogin'}>
                        <div className={'box'}>
                            <div className={'titleAuth mb-0'}>LET'S KICK IT!</div>
                            <div className={'titleAuth2'}>Jeśli nie masz jeszcze konta, <Link to={'/rejestracja'}> zarejestruj się! </Link></div>

                            <div className={'inputSBox'}>
                                <Input type="text" name="Username" value={this.state.Username} onChange={this.handleChange} required placeholder="Użytkownik" />
                            </div>
                            <div className={'inputSBox'}>
                                <Input type="password" name="Password" value={this.state.Password} onChange={this.handleChange} required placeholder="Enter Password" />

                            </div>
                            <div className={'contentBox'}>
                                <div className={'checkboxBox'}>
                                </div>
                                <div className={'text1'}>Zapomniałeś hasło?</div>
                            </div>
                            <Link to={'/'}>
                                <div className={'btnAuth'} type="submit" >Zaloguj</div>
                            </Link>
                            <div className={'borderBox'}>
                                <div className={'line'} />
                                <div className={'text2 or'}> LUB </div>
                            </div>
                            <div className={'socialMediaBox'}>
                                <div className={'icAuth'}><FaFacebookSquare /></div>
                                <div className={'icAuth'}><AiFillGoogleCircle /></div>
                                <div className={'icAuth'}><FaTwitterSquare /></div>
                            </div>
                        </div>
                    </div>
                </div >
            </form >

        )
    }
}

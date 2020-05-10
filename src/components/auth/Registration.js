import React, { Component } from 'react'
import './../../App.css'
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GiNinjaHead } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {

        const {
            email,
            password,
            password_confirmation
        } = this.state;

        axios.post("http://localhost:1028/api/users/register", {
            user: {
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        },
            { withCredentials: true }
        ).then(response => {
            console.log("registration res", response);
        }).catch(error => {
            console.log("registration error", error);
        })
        event.preventDefault();
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div className={'authBox'}>
                        <div className={'leftBox leftBoxregister'}>
                            < div className={'bgGreen'} />
                            <div className={'imageAuth'} />
                            <div className={'imageText bold style1'}>NinjaTask<GiNinjaHead /></div>
                            <div className={'imageText style2'}>Lepsza strona zarządzania!</div>
                        </div>
                        <div className={'rightBoxRegister'}>
                            <div className={'box'}>
                                <div className={'titleAuth mb-0'}>LET'S KICK IT!</div>
                                <div className={'titleAuth2'}><i>"Każda praca jest dobra, o ile jest dobrze zarządzana."</i></div>
                                <div className={'inputSBox'}>
                                    <input type={"text"} name="login" className={"inputS"} placeholder={'Nazwa użytkownika'} />
                                </div>
                                <div className={'inputSBox'}>
                                    <input type={"email"} name="email" className={"inputS"} placeholder={'Email'} value={this.state.email} onChange={this.handleChange} required />
                                </div>
                                <div className={'inputSBox'}>
                                    <input type={'password'} name="password" className={"inputS"} placeholder={'Hasło'} value={this.state.password} onChange={this.handleChange} required />
                                </div>
                                <div className={'inputSBox'}>
                                    <input type={'password'} name="password_confirmation" className={"inputS"} placeholder={'Wprowadź ponownie hasło'} value={this.state.password_confirmation} onChange={this.handleChange} required />
                                </div>

                                {/* <Link to={'/MainBoard'}> */}
                                <button className={'btnAuth'}>Zarejestruj się</button>
                                {/* </Link> */}

                                <div className={'borderBox'}>
                                    <div className={'line'} />
                                    <div className={'text2 or'}> LUB </div>
                                </div>
                                <div className={'socialMediaBox'}>
                                    {/* <div><i className="fa fa-spinner fa-spin">no spinner but why</i></div> */}
                                    <div className={'icAuth'}><FaFacebookSquare /></div>
                                    <div className={'icAuth'}><AiFillGoogleCircle /></div>
                                    <div className={'icAuth'}><FaTwitterSquare /></div>
                                </div>
                            </div>
                        </div>
                    </div >
                </form>
            </>
        )
    }
}

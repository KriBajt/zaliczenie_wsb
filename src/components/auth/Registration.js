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
            FirstName: "",
            LastName: "",
            Username: "",
            Password: ""
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
            FirstName,
            LastName,
            Username,
            Password
        } = this.state

        axios.post("http://localhost:1028/api/users/register", {

            FirstName: FirstName,
            LastName: LastName,
            Username: Username,
            Password: Password,

        },
            { withCredentials: true }
        ).then(response => {
            // if (response.data.status === "created") {
            this.props.handleSuccessfulAuth(response.data);
            // }
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
                                    <input type={"text"} name="FirstName" className={"inputS"} placeholder={'Imie użytkownika'} value={this.state.FirstName} onChange={this.handleChange} />
                                </div>
                                <div className={'inputSBox'}>
                                    <input type={"lastname"} name="LastName" className={"inputS"} placeholder={'Nazwisko'} value={this.state.LastName} onChange={this.handleChange} required />
                                </div>
                                <div className={'inputSBox'}>
                                    <input type={'username'} name="Username" className={"inputS"} placeholder={'Nazwa użytkownika'} value={this.state.Username} onChange={this.handleChange} required />
                                </div>
                                <div className={'inputSBox'}>
                                    <input type={'password'} name="Password" className={"inputS"} placeholder={'Hasło'} value={this.state.Password} onChange={this.handleChange} required />
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

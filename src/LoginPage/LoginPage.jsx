import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GiNinjaHead } from 'react-icons/gi';
import MainBoard from '../components/MainBoard'

import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';

import { userActions } from '../actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (

            <form name="form" onSubmit={this.handleSubmit}>
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
                            <div className={'titleAuth2'}>Jeśli nie masz jeszcze konta, <Link to={'/register'}> zarejestruj się! </Link></div>

                            {/* <div className={'inputSBox'}>
                                <Input type="text" name="Username" value={this.state.Username} onChange={this.handleChange} required placeholder="Użytkownik" />
                            </div> */}
                            <div className={'inputSBox form-group' + (submitted && !username ? ' has-error' : '')}>
                                <input type="text" className="inputS" placeholder="Użytkownik" name="username" value={username} onChange={this.handleChange} />
                                {submitted && !username &&
                                    <div className="help-block">Username is required</div>
                                }
                            </div>
                            {/* <div className={'inputSBox'}>
                                <Input type="password" name="Password" value={this.state.Password} onChange={this.handleChange} required placeholder="Enter Password" />
                            </div> */}
                            <div className={'inputSBox form-group' + (submitted && !password ? ' has-error' : '')}>
                                <input type="password" className="inputS" placeholder="Użytkownik" name="password" value={password} onChange={this.handleChange} />
                                {submitted && !password &&
                                    <div className="help-block">Password is required</div>
                                }
                            </div>





                            <div className={'contentBox'}>
                                <div className={'checkboxBox'}>
                                    {/* <input type={'checkbox'} className={'checkbox'} /> */}
                                    {/* <label className={'checkboxLabel'}>Pamiętaj</label> */}
                                </div>
                                <div className={'text1'}>Zapomniałeś hasło?</div>
                            </div>

                            {/* <Link to={'/MainBoard'}>
                                <div className={'btnAuth'} type="submit" >Zaloguj</div>
                            </Link> */}

                            <div className="form-group">
                                <button className="btnAuth">Login</button>
                                {loggingIn &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                            </div>

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
            </form >
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
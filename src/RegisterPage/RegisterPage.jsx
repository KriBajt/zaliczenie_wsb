import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GiNinjaHead } from 'react-icons/gi';

import axios from 'axios';

import { userActions } from '../actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                numberOfTaskboards: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
        return (

            <form name="form" onSubmit={this.handleSubmit}>

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

                            <div className={'inputSBox form-group ' + (submitted && !user.firstName ? ' has-error' : '')}>
                                <input type="text" className="inputS" placeholder="Imię " name="firstName" value={user.firstName} onChange={this.handleChange} />
                                {submitted && !user.firstName &&
                                    <div className="help-block">Imie jest wymagane</div>
                                }
                            </div>
                            <div className={'inputSBox form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                                <input type="text" className="inputS" placeholder="Nazwisko " name="lastName" value={user.lastName} onChange={this.handleChange} />
                                {submitted && !user.lastName &&
                                    <div className="help-block">Nazwisko jest wymagane</div>
                                }
                            </div>

                            <div className={'inputSBox form-group' + (submitted && !user.username ? ' has-error' : '')}>
                                <input type="text" className="inputS" placeholder="Nazwa użytkownika" name="username" value={user.username} onChange={this.handleChange} />
                                {submitted && !user.username &&
                                    <div className="help-block">Nazwa użytkownika jest wymagana</div>
                                }
                            </div>
                            <div className={'inputSBox form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                <input type="password" className="inputS" placeholder="Hasło" name="password" value={user.password} onChange={this.handleChange} />
                                {submitted && !user.password &&
                                    <div className="help-block">Hasło jest wymagane</div>
                                }
                            </div>

                            <div className="form-group">
                                <button className="btnAuth">Zarejestruj się</button>
                                {registering &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                                <Link to="/login" className="btn btn-link ">Anuluj</Link>
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
            </form>


        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
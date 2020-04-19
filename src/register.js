import React, { Component } from 'react'
import './App.css';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GiNinjaHead } from 'react-icons/gi';

export default class register extends Component {
    render() {
        return (
            <div className={'authBox'}>
                <div className={'leftBox'}>
                    < div className={'bgGreen'} />
                    <div className={'imageAuth'} />
                    <div className={'imageText bold style1'}>NinjaTask<GiNinjaHead /></div>
                    <div className={'imageText style2'}>Lepsza strona zarządzania!</div>
                </div>
                <div className={'rightBox'}>
                    <div className={'box'}>
                        <div className={'titleAuth mb-0'}>LET'S KICK IT!</div>
                        <div className={'titleAuth2'}>Jeśli nie masz jeszcze konta, zarejestruj się!</div>

                        <div className={'inputSBox'}>
                            <input type={"text"} className={"inputS"} placeholder={'Nazwa użytkownika'} />
                        </div>
                        <div className={'inputSBox'}>
                            <input type={'password'} className={"inputS"} placeholder={'Hasło'} />
                        </div>
                        <div className={'contentBox'}>
                            <div className={'checkboxBox'}>
                                {/* <input type={'checkbox'} className={'checkbox'} /> */}
                                {/* <label className={'checkboxLabel'}>Pamiętaj</label> */}
                            </div>
                            <div className={'text1'}>Zapomniałeś hasło?</div>
                        </div>
                        <div className={'btnAuth'}>Zaloguj</div>
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
        )
    }
}

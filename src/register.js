import React, { Component } from 'react'
import './App.css';

export default class register extends Component {
    render() {
        return (
            <div className={'authBox d-flex justify-content-center'}>
                <div className={'leftBox'}>
                    <div className={'bgGreen'} />
                    <div className={'imageAuth'} />
                    <div className={'imageText bold style1'}>Aplikacja Trello</div>
                    <div className={'imageText style2'}>Lepsza strona mocy Reacta!</div>
                </div>
                <div className={'rightBox'}>
                    <div className={'box'}>
                        <div className={'titleAuth'}>Log into Trello</div>

                        <div className={'inputSBox'}>
                            <input type={"text"} className={"inputS"} placeholder={'Nazwa użytkownika'} />
                        </div>
                        <div className={'inputSBox'}>
                            <input type={'password'} className={"inputS"} placeholder={'Hasło'} />
                        </div>
                        <div className={'contentBox'}>
                            <div className={'checkboxBox'}>
                                <input type={'checkbox'} className={'checkbox'} />
                                <label className={'checkboxLabel'}>Pamiętaj</label>
                            </div>
                            <div className={'text1'}>Zapomniałeś hasło?</div>
                        </div>
                        <div className={'btnAuth'}>Zaloguj</div>
                        <div className={'borderBox'}>
                            <div className={'line'} />
                            <div className={'text2 or'}> LUB </div>
                        </div>
                        <div className={'socialMediaBox'}>
                            <div className={'icAuth google'} />
                            <div className={'icAuth facebook'} />
                            <div className={'icAuth twitter'} />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

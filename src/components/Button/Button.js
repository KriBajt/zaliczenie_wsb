import React, { Component } from 'react'
import './Button.css';

export default class Button extends Component {
    render() {
        return (
            <>
                <div className="container-button ">
                    <a href='/cennik.pdf' download>
                        Pobierz Cennik
                    </a>
                </div>

            </>
        )
    }
}

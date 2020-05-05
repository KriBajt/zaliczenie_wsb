import React, { Component } from 'react'
import { BsFillTrashFill } from 'react-icons/bs';


export default class BtnDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            cards: []
        };
    }


    render() {
        const { cards } = this.state;
        return (
            <div>
                <div className={'btnDetails d-flex justify-content-end'}>
                    <BsFillTrashFill onClick={() => this.deleteCard(cards.id)} />
                </div>
            </div>
        )
    }
}

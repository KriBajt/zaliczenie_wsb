import React, { Component } from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap';
import CardDetail from '../Card/CardDetail'
import { IoMdInformationCircleOutline } from 'react-icons/io';
import './Button.css';

export default class BtnCardDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { deps: [], addModalShow: false }
    }



    render() {
        const { deps } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        console.log(this.props)

        return (
            <div>
                <ButtonToolbar>
                    <div className={'btnDetails d-flex justify-content-end'}>
                        <IoMdInformationCircleOutline onClick={() => this.setState({ addModalShow: true })} />
                    </div>
                    <CardDetail
                        key={this.props.card}
                        markComplete={this.props.markComplete}
                        deleteCard={this.props.deleteCard}
                        setUpdate={this.props.setUpdate}
                        card={this.props.card}
                        user={this.props.user}
                        id={this.props.id}
                    />
                </ButtonToolbar>

            </div>
        )
    }
}

import React, { Component } from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap';
import CardLists from '../CardLists'
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
        return (
            <div>
                <ButtonToolbar>
                    <div className={'btnDetails d-flex justify-content-end'}>
                        <IoMdInformationCircleOutline onClick={() => this.setState({ addModalShow: true })} />
                    </div>
                    <CardLists
                        show={this.state.addModalShow}
                        onHide={addModalClose} />

                </ButtonToolbar>

            </div>
        )
    }
}

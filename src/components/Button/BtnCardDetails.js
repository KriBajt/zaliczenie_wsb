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

    componentDidMount() {
        console.log(this.props)

        fetch("http://localhost:1028/users/1/taskboards/1/cards/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        cards: result
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
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
                    <CardDetail
                        key={this.props.card}
                        markComplete={this.props.markComplete}
                        deleteCard={this.props.deleteCard}
                        setUpdate={this.props.setUpdate}
                        card={this.props.card.id}
                        user={this.props.user}
                        id={this.props.id}

                    />
                </ButtonToolbar>

            </div>
        )
    }
}

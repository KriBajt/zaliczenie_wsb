import React, { Component } from 'react'
import { ButtonToolbar } from 'react-bootstrap';
import CardDetail from '../Card/CardDetail'
import { IoMdInformationCircleOutline } from 'react-icons/io';
import './Button.css';

export default class BtnCardDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { deps: [], addModalShow: false }
    }

    componentDidMount() {
        // console.log(this.props)

        fetch("https://ninjaorganizer.azurewebsites.net/users/1/taskboards/1/cards/")
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
        return (
            <div>
                <ButtonToolbar>
                    <div className={'btnDetails d-flex justify-content-end'}>
                        <IoMdInformationCircleOutline onClick={() => this.setState({ addModalShow: true })} />
                    </div>
                    <CardDetail
                        key={this.props.card}
                        markcomplete={this.props.markcomplete}
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

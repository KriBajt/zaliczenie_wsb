import React, { Component } from 'react'
import './CardDetail.css';
import CardItem from './CardItem';
import { connect } from 'react-redux';

export default class ShowCard extends Component {
    constructor(props) {
        super(props);

        this.keyCount = 0;
        this.getKey = this.getKey.bind(this);
    }

    getKey() {
        return this.keyCount++;
    }

    render() {

        return this.props.cards.filter(card => card.state < 2).map(card => (
            <CardItem
                key={this.getKey()}
                markcomplete={this.props.markcomplete}
                deleteCard={this.props.deleteCard}
                setUpdate={this.props.setUpdate}
                card={card}
                user={this.props.user}
                tables={this.props.tableID}

            />
        ));
    }
}

// //PropTypes
// ShowCard.propTypes = {
//     cards: PropTypes.array.isRequired,
//     // tables: PropTypes.array.isRequired,
//     // markcomplete: PropTypes.func.isRequired,
//     deleteCard: PropTypes.func.isRequired,
//     onChange: PropTypes.func.isRequired,
//     setUpdate: PropTypes.func.isRequired,

// };



function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedShowCard = connect(mapStateToProps)(ShowCard);
export { connectedShowCard as ShowCard };
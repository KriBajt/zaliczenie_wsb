import React, { Component } from 'react';
import TrelloList from "./TrelloList";
import { connect } from "react-redux"

class App extends Component {
    render() {
        const { lists } = this.props;

        return (
            <>
                <h3>Hello</h3>
                {lists.map(list => (<TrelloList title={list.title} cards={list.cards} />))}
            </>
        )
    }
}

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(App);
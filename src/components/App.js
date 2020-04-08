import React, { Component } from 'react';
import TrelloList from "./TrelloList";
import { connect } from "react-redux"

class App extends Component {
    render() {
        const { lists } = this.props;

        return (
            <>
                <h3>Hello</h3>
                <div style={styles.listsContainer}>
                    {lists.map(list => (
                        <TrelloList key={list.id} title={list.title} cards={list.cards} />))}
                </div>
            </>
        )
    }
}

const styles = {
    listsContainer: {
        display: "flex",
        flex: "row",

    }
}
const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(App);
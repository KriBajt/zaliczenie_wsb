import React, { Component } from 'react';
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {

    onDragEnd = () => {
        // do zrobienia
    }

    render() {
        const { lists } = this.props;
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <>
                    <div class="navbar transparent navbar-inverse navbar-fixed-top">
                        <nav class="navbar-inner">
                            dsdsdsd
                    </nav>
                    </div>

                    <div style={styles.listsContainer}>
                        {lists.map(list => (
                            <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards} />))}
                        <TrelloActionButton list />
                    </div>
                </>
            </DragDropContext>

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
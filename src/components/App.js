import React, { Component } from 'react';
import TrelloList from "./TrelloList";

export default class App extends Component {
    render() {
        return (
            <>
                <h3>Hello</h3>
                <TrelloList title="test" />
            </>
        )
    }
}

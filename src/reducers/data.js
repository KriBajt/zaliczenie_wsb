import React, { Component } from 'react'


export default class data extends Component {
    constructor() {
        super()
        this.state = {
            'items': []
        }
    }

    componentDidMount() {
        this.Items();
    }

    getItems() {
        fetch('http://localhost:1028/api/taskboards/3/cards/')
            .then(results => results.json())
            .then(results => this.setState({ 'items': results }));
    }

    render() {
        return (
            <ul>
                {this.state.items.map(function (item, index) {
                    return (
                        <div>
                            <h1>{item.title}</h1>
                        </div>
                    )
                }
                )}

            </ul>

        );
    }
}

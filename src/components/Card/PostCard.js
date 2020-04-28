import React, { Component } from 'react'
import axios from 'axios';

export default class PostCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            content: '',
            state: '',
            priority: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:1028/api/taskboards/3/cards/', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { title, content, state, priority } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler}></input>
                        <input type="text" name="content" value={content} onChange={this.changeHandler}></input>
                        <input type="text" name="priority" value={priority} onChange={this.changeHandler}></input>
                        <input type="text" name="state" value={state} onChange={this.changeHandler}></input>
                    </div>
                    <button type="submit">Zapisz</button>


                </form>

            </div>
        )
    }
}

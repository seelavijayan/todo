import React, { Component } from 'react'

export default class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };
    }

    //Handle Change
    handleChange = (e) => {
        this.setState({
            task:e.target.value
        })
    }

    //Handle Submit
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTask(this.state.task);
        this.setState({
            task:''
        });

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Task"
                    value={this.state.task}
                    onChange={this.handleChange}
                    autoFocus />
                <button className="add" type="submit">Add</button>
            </form>
        )
    }
}

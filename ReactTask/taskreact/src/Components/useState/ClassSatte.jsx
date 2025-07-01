import React, { Component } from "react";

export default class ClassSatte extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 1
        }
    }

    increamentHandler = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    handleDecrease = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {

        return (
            <div>
                <h1>Counter : {this.state.count}</h1>


                <button onClick={this.increamentHandler}>Increament</button>

                <button onClick={this.handleDecrease}>Decreament</button>
            </div>
        )
    }
}
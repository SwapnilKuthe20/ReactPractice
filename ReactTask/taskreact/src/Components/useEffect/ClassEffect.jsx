import React, { Component } from "react";

export default class ClassEffect extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log("Component mount calls..");
    }

    componentDidUpdate() {
        console.log("Component update calls...");
    }

    Increament = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h2>Counter : {this.state.count}</h2>

                <button onClick={this.Increament}>increament</button>
            </div>
        )
    }
}




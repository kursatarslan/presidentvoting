import React, { Component } from 'react';
import './App.css';

export default class List extends Component {

    handleClick = () => this.props.onVote(this.props.id);

    render() {
        
        return (
        <div className="App">
            {this.props.name}
            <button onClick={this.handleClick}>+</button>
            {this.props.votes}
        </div>
        )};
}


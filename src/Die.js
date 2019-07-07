import React, { Component } from 'react';
import './Die.css';

export default class Die extends Component {
    render() {
        return (
            <div className="Die">
                <h1><i className={`fas fa-dice-${this.props.face} ${this.props.rolling ? 'shaking' : '' }`}></i></h1>
            </div>
        )
    }
}

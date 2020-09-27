import React, { Component } from 'react';

export class TodoItem extends Component {
    render() {
        return (
            <ul className="w3-ul w3-hoverable w3-card">
                <li className="w3-display-container">
                    {this.props.todo.title}
                    <span className="w3-button w3-transparent w3-display-right">&times;</span>
                </li>
            </ul>
        )
    }
}

export default TodoItem

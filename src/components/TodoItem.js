import React, { Component } from 'react';
import PropTypes from 'prop-types';



export class TodoItem extends Component {

    getTextStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <li style={this.getTextStyle()} className="w3-display-container">
                <input type="checkbox" className="w3-check" name="completed" id="completed"
                    checked={completed} onChange={this.props.markComplete.bind(this, id)} />
                <label className="w3-margin-left">{title}</label>
            </li>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem

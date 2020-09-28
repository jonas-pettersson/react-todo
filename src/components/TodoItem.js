import React, { Component } from 'react';
import PropTypes from 'prop-types';



export class TodoItem extends Component {

    getCheckboxClass = () => {
        if (this.props.todo.completed) {
            return "fa fa-check-square w3-display-right w3-margin-right w3-large"
        }
        else {
            return "far fa-square w3-display-right w3-margin-right w3-large"
        }
    }

    getTextStyle = () => {
        if (this.props.todo.completed) {
            return {
                textDecoration: 'line-through'
            }
        }
        else {
            return {
                textDecoration: 'none'
            }
        }
    }

    render() {
        return (
            <li style={this.getTextStyle()} className="w3-display-container">
                {this.props.todo.title}<i className={this.getCheckboxClass()}></i>
            </li>

        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    })

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });

    }


    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="w3-bar w3-container">
                    <input type="text" className="w3-input w3-bar-item w3-light-grey"
                        style={{ width: '90%' }} placeholder="Add Todo..."
                        name="title" id="title" value={this.state.title}
                        onChange={this.onChange} />
                    <button type="submit" className="w3-right w3-bar-item w3-white w3-large" >
                        <i className="fa fa-plus w3-hover-text-green"></i></button>
                </div>
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo

import React, { Component } from 'react'
// import { v4 as uuid } from 'uuid'
import axios from 'axios'

import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

import './App.css'

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then(res => this.setState({ todos: res.data }))
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`, {})
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))

  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos',
      {
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));

  }


  render() {
    return (
      <div className="App" >
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <ul className="w3-ul w3-hoverable">
          <Todos todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo} />
        </ul>
      </div>
    );
  }
}

export default App;

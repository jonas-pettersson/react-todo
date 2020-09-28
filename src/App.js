import React, { Component } from 'react';
import Todos from './components/Todos'

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App" >
        <div className="w3-container w3-teal">
          <h1>TODOs</h1>
        </div>
        <ul className="w3-ul w3-hoverable">
          <Todos todos={this.state.todos} />
        </ul>
      </div>
    );
  }
}

export default App;

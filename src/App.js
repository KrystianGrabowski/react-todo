import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Do the laundry',
        completed: true
      },
      {
        id: 2,
        title: 'Team meeting',
        completed: false
      },
      {
        id: 3,
        title: 'Go for a walk',
        completed: false
      }
    ]
  }

  // Toggler
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map( todo => {
      if (todo.id === id ) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }

  // Delete Todo
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter( todo => todo.id != id)] });
  }

  render() {
     return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;

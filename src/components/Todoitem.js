import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Todoitem extends Component {
  getStyle = () => {
    return {
      background: '#e4e4e4',
      padding: '1rem',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  markComplete = () => {
    console.log(this.props);
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={ this.getStyle() }>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {'  '}
          { title }
          <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

const btnStyle = {
  background: '#cc4444',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

// const itemStyle = {
//   backgroundColor: '#e6e6e6'
// }

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default Todoitem

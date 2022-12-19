import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.list.completed}
          onChange={() => this.props.handler(this.props.list.id)}
        />
        <button onClick={() => this.props.deleteBtn(this.props.list.id)}>
          Delete
        </button>
        {this.props.list.title}
      </li>
    );
  }
}

export default TodoItem;

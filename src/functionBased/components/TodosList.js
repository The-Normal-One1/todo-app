import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodosList extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              list={todo}
              handler={this.props.handleChangeProps}
              deleteBtn={this.props.delTodoProps}
              setUpdateOpt={this.props.setUpdateProps}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default TodosList;

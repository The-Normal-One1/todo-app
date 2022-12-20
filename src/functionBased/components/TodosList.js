import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => (
  <>
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          list={todo}
          handler={props.handleChangeProps}
          deleteBtn={props.delTodoProps}
          setUpdateOpt={props.setUpdateProps}
        />
      ))}
    </ul>
  </>
);

export default TodosList;

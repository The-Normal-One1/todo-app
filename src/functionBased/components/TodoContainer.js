import React, { useState } from 'react';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ todos: data }));
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.todos !== this.state.todos) {
  //     const temp = JSON.stringify(this.state.todos);
  //     localStorage.setItem('todos', temp);
  //   }
  // }

  // componentDidMount() {
  //   const lists = localStorage.getItem('todos');
  //   const loadTodos = JSON.parse(lists);
  //   if (loadTodos) {
  //     this.setState({
  //       todos: loadTodos,
  //     });
  //   }
  // }

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoItemProps={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          delTodoProps={delTodo}
          setUpdateProps={setUpdate}
        />
      </div>
    </div>
  );
};

export default TodoContainer;

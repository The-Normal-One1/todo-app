import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  state = {
    todos: [],
  };

  handleChange = (id) => {
    // console.log('You CLICKED', id);
    // this.setState((prevState) => {
    //     return {
    //       todos: prevState.todos.map((todo) => {
    //         if (todo.id === id) {
    //           return {
    //             ...todo,
    //             completed: !todo.completed,
    //           };
    //         }
    //         return todo;
    //       }),
    //     };
    //   }); or removing the () and put return instead

    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    // console.log('DELETED', id);
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => todo.id !== id),
      ],
    });
  };

  addTodoItem = (title) => {
    // console.log(title);
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };

    this.setState({
      todos: [newTodo, ...this.state.todos],
    });
  };

  setUpdate = (updatedTitle, id) => {
    // console.log(updatedTitle, id);

    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ todos: data }));
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', temp);
    }
  }

  componentDidMount() {
    const lists = localStorage.getItem('todos');
    const loadTodos = JSON.parse(lists);
    if (loadTodos) {
      this.setState({
        todos: loadTodos,
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoItemProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            delTodoProps={this.delTodo}
            setUpdateProps={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;

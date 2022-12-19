import React from 'react';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: false,
      },
    ],
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
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  render() {
    return (
      <>
        <Header />
        <InputTodo />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          delTodoProps={this.delTodo}
        />
      </>
    );
  }
}

export default TodoContainer;

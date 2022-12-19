import React, { Component } from 'react';

class InputTodo extends Component {
  state = {
    title: '',
  };

  onChangeInp = (e) => {
    // console.log('ERMIYAS D.');
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitInp = (e) => {
    e.preventDefault();
    console.log(this.state.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitInp}>
        <h2>Add Todo Lists</h2>
        <input
          type="text"
          placeholder="Meeting with the family"
          value={this.state.title}
          name="title"
          onChange={this.onChangeInp}
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;

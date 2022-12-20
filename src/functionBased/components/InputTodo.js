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
    // console.log(this.state.title);
    if (this.state.title.trim()) {
      this.props.addTodoItemProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write itme');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitInp} className="form-container">
        <input
          className="input-text"
          type="text"
          placeholder="Meeting with the family"
          value={this.state.title}
          name="title"
          onChange={this.onChangeInp}
          required
        />
        <button className="input-submit" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default InputTodo;

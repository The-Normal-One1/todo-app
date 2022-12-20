import React, { Component } from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends Component {
  state = {
    editing: false,
  };
  handleEditing = () => {
    // console.log('Edit mode is activated');
    this.setState({
      editing: true,
    });
  };

  handleUpdateDone = (event) => {
    // console.log(event.key);
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: 'red',
      opacity: 0.5,
      textDecoration: 'line-through',
    };

    const { id, title, completed } = this.props.list;

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={completed}
            onChange={() => this.props.handler(id)}
          />
          <button onClick={() => this.props.deleteBtn(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>{title} </span>
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={title}
          onChange={(e) => {
            // console.log(e.target.value, id);
            this.props.setUpdateOpt(e.target.value, id);
          }}
          onKeyDown={this.handleUpdateDone}
        />
      </li>
    );
  }
}

export default TodoItem;

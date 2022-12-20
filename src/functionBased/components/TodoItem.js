import React, { useState, useEffect } from 'react';
import styles from './TodoItem.module.css';

function TodoItem(props) {
  // state = {
  //   editing: false,
  // };
  const [editing, setEdting] = useState('false');

  const handleEditing = () => {
    // console.log('Edit mode is activated');
    setEdting(true);
  };

  const handleUpdateDone = (event) => {
    // console.log(event.key);
    if (event.key === 'Enter') {
      setEdting(false);
    }
  };

  useEffect(() => {
    console.log('Cleaning up---');
  });

  const completedStyle = {
    fontStyle: 'italic',
    color: 'red',
    opacity: 0.5,
    textDecoration: 'line-through',
  };

  const { id, title, completed } = props.list;

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => props.handler(id)}
        />
        <button onClick={() => props.deleteBtn(id)}>Delete</button>
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
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
}

export default TodoItem;

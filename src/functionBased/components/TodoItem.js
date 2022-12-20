import { FaTrash } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import styles from './TodoItem.module.css';

function TodoItem(props) {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdateDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: 'red',
    opacity: 0.5,
    textDecoration: 'line-through',
  };

  const { id, title, completed } = props.list;

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  useEffect(() => {
    console.log('Cleaning up---');
  }, []);

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => props.handler(id)}
        />
        <button onClick={() => props.deleteBtn(id)}>
          <FaTrash style={{ color: 'orangered', fontSize: '26px' }} />
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
          {' '}
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={(e) => {
          props.setUpdateOpt(e.target.value, id);
        }}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
}

export default TodoItem;

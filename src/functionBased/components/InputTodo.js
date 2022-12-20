import React, { useState } from 'react';

function InputTodo(props) {
  const [title, setTitle] = useState('');

  const onChangeInp = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmitInp = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.addTodoItemProps(title);
      setTitle('');
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmitInp} className="form-container">
      <input
        className="input-text"
        type="text"
        placeholder="Meeting with the family"
        value={title}
        name="title"
        onChange={onChangeInp}
        required
      />
      <button className="input-submit" type="submit">
        Submit
      </button>
    </form>
  );
}
export default InputTodo;

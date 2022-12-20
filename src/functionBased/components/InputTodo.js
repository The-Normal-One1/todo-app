import { FaPlusCircle } from 'react-icons/fa';
import React, { useState } from 'react';

function InputTodo(props) {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChangeInp = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitInp = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoItemProps(inputText.title);
      setInputText({
        title: '',
      });
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
        value={inputText.title}
        name="title"
        onChange={onChangeInp}
        required
      />
      <button className="input-submit" type="submit">
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '30px', marginTop: '2px' }}
        />
      </button>
    </form>
  );
}
export default InputTodo;

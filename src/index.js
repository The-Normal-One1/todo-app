import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoContainer from './functionBased/components/TodoContainer';
import { BrowserRouter } from 'react-router-dom';
// stylesheet
import './functionBased/index.css';

const value = ReactDOM.createRoot(document.getElementById('root'));
value.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>
);

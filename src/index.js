import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoContainer from './functionBased/components/TodoContainer';
// stylesheet
import './functionBased/index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const element = <h1> Hello from React World I am from Ethiopia </h1>;
const value = ReactDOM.createRoot(document.getElementById('root'));
value.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
);

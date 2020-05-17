import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './style.scss';

function App() {
  return (
    <div className="todo-app">
      <h2 className="todo-app__title">RecoilJS Todo App</h2>
      <TodoForm />
      <TodoList />
    </div>
  );
}

ReactDOM.render(
  <RecoilRoot>
      <App />
  </RecoilRoot>,
  document.getElementById('root')
);
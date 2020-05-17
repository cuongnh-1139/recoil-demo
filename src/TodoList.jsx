import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from './state';
import TodoItem from './TodoItem';

function TodoList() {
  const todoList = useRecoilValue(todoListState);
  
  return (
      <ul className="todo-app__todolist">
        {todoList.map(todo => (
            <TodoItem data={todo} key={todo.id} />
        ))}
      </ul>
  );
}

export default TodoList;
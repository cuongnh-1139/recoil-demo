import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './state';

function TodoForm() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);
  
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  
  function handleSubmit(e) {
   e.preventDefault();
   const getValue = inputValue.trim();
   // check if value exists
   if (getValue) {
     setTodoList((oldTodoList) => {
         return [
            ...oldTodoList,
            {
              id: Math.random().toString(),
              content: getValue,
              isDone: false
            }
          ];
     });
     
     // reset input value
    setInputValue('');
   }
  }
  
  return (
      <form className="todo-app__form" onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <input type="submit" value="Add" />
      </form>
  );
}

export default TodoForm;

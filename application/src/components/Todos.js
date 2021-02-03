import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import List from './List';
import { handleAddTodo, handleDeleteTodo, handleToggleTodo } from '../actions/todos';

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const inputRef = React.useRef('');

  const addItem = (e) => {
    e.preventDefault();
    dispatch(handleAddTodo(
      inputRef.current.value,
      () => inputRef.current.value = ''
    ));
  }

  const removeItem = (todo) => dispatch(handleDeleteTodo(todo));


  const toggleItem = (id) => dispatch(handleToggleTodo(id));


  return (
    <div>
      <h1>Todo List</h1>
      <input
        type='text'
        placeholder='Add Todo'
        ref={inputRef}
      />
      <button onClick={addItem}>Add Todo</button>
      <List
        items={todos}
        remove={removeItem}
        toggle={toggleItem}
      />
    </div>
  );
}

export default Todos;
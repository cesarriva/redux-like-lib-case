import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import List from './List';
import { handleAddGoal, handleRemoveGoal } from '../actions/goals';

const Goals = () => {
  const goals = useSelector(state => state.goals);
  const dispatch = useDispatch();
  const inputRef = React.useRef('');

  const addItem = (e) => {
    e.preventDefault();
    dispatch(handleAddGoal(
      inputRef.current.value,
      () => inputRef.current.value = ''
    ));
  }

  const removeItem = (goal) => {
    dispatch(handleRemoveGoal(goal));
  };

  return (
    <div>
      <h1>Goal List</h1>
      <input
        type='text'
        placeholder='Add Goal'
        ref={inputRef}
      />
      <button onClick={addItem}>Add Goal</button>
      <List
        items={goals}
        remove={removeItem}
      />
    </div>
  );
}

export default Goals;
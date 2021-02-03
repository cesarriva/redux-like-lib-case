import { ADD_TODO } from '../actions/todos';
import { ADD_GOAL } from '../actions/goals';

const checker = (store) => (next) => (action) => {
  if (action.type === ADD_TODO &&
    action.todo.name.includes('bitcoin')) {
    return alert('Node. Bad idea.');
  }

  if (action.type === ADD_GOAL &&
    action.goal.name.includes('bitcoin')) {
    return alert('Node. Bad idea.');
  }

  return next(action);
};

export default checker;
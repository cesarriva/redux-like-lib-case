import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ConnectedTodos from './Todos';
import ConnectedGoals from './Goals';
import { handleInitialFetch } from '../actions/shared';

const App = () => {
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(handleInitialFetch());
  }, [dispatch]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <ConnectedTodos />
      <ConnectedGoals />
    </div>
  );
}

export default App;
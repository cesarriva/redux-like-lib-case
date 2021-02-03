// ************** Redux like library ***********
/**
 * 1. Manages an internal state
   2. Exposes a way to get the state
   3. Exposes a way to listen to changes on the state
   4. Exposes a way to update the state 
 * @param - Root Reducer (combined reducers) of the application 
 */
// function createStore(reducer) {
//   let state;
//   let listeners = [];

//   const getState = () => state;

//   const subscribe = (listener) => {
//     listeners.push(listener);
//     return () => {
//       listeners = listeners.filter(l => l !== listener);
//     };
//   };

//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.forEach(listener => listener());
//   };

//   return {
//     getState,
//     subscribe,
//     dispatch
//   }
// }

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal
  };
}

function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id
  };
}

function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id !== action.id
          ? todo
          : {
            ...todo,
            complete: !todo.complete
          }
      );

    default:
      return state;
  }
}

const goalsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]);

    case REMOVE_GOAL:
      return state.filter(goal => goal.id !== action.id);

    default:
      return state;
  }
};

const rootReducer = (state = {}, action) => {
  return {
    todos: todosReducer(state.todos, action),
    goals: goalsReducer(state.goals, action)
  };
}

const store = createStore(rootReducer);
store.subscribe(() => console.log('State changed. New state:', store.getState()));

store.dispatch(addTodo({
  id: 0,
  name: 'Walk the dog',
  complete: false,
}));

store.dispatch(addTodo({
  id: 1,
  name: 'Wash the car',
  complete: false,
}));

store.dispatch(addTodo({
  id: 2,
  name: 'Go to the gym',
  complete: true,
}));

store.dispatch(removeTodo(1));

store.dispatch(toggleTodo(0));

store.dispatch(addGoal({
  id: 0,
  name: 'Learn Redux'
}));

store.dispatch(addGoal({
  id: 1,
  name: 'Lose 20 pounds'
}));

store.dispatch(removeGoal(0));


//************React-Redux like library */
// React-Redux like library
// const Context = React.createContext();

// /**
//  *  connect: Render any component, passing that component any data it needs from the store
// */
// function connect(mapStateToProps) {
//   return (Component) => {

//     class Receiver extends React.Component {
//       componentDidMount() {
//         const { subscribe } = this.props.store;
//         this.unsubscribe = subscribe(() => this.forceUpdate());
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }

//       render() {
//         const { dispatch, getState } = this.props.store;
//         const state = getState();
//         const stateNeeded = mapStateToProps(state);

//         return <Component {...stateNeeded} dispatch={dispatch} />;
//       }
//     }

//     class ConnectedComponent extends React.Component {
//       render() {
//         return (
//           <Context.Consumer>
//             {(store) => <Receiver store={store} />}
//           </Context.Consumer>
//         );
//       }
//     }

//     return ConnectedComponent;
//   };
// }

// class Provider extends React.Component {
//   render() {
//     return (
//       <Context.Provider value={this.props.store}>
//         {this.props.children}
//       </Context.Provider>
//     );
//   }
// }

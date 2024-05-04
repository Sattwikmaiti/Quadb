import { combineReducers } from 'redux';
import {
  FETCH_TODOS_SUCCESS,
  ADD_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS
} from './actions';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return action.payload;
    case ADD_TODO_SUCCESS:
      return [...state, action.payload];
    case UPDATE_TODO_SUCCESS:
      return state.map(todo =>
        todo._id === action.payload.id ? { ...todo, ...action.payload.updates } : todo
      );
    case DELETE_TODO_SUCCESS:
      return state.filter(todo => todo._id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todosReducer
});

export default rootReducer;

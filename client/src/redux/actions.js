import axios from 'axios';

export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';

export const fetchTodosSuccess = todos => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos
});

export const addTodoSuccess = todo => ({
  type: ADD_TODO_SUCCESS,
  payload: todo
});

export const updateTodoSuccess = (id, updates) => ({
  type: UPDATE_TODO_SUCCESS,
  payload: { id, updates }
});

export const deleteTodoSuccess = id => ({
  type: DELETE_TODO_SUCCESS,
  payload: id
});

export const fetchTodos = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:5000/todos');
    dispatch(fetchTodosSuccess(response.data));
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

export const addTodo = todo => async dispatch => {
  try {
    const response = await axios.post('http://localhost:5000/todos', todo);
    dispatch(addTodoSuccess(response.data));
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

export const updateTodo = (id, updates) => async dispatch => {
  try {
    await axios.put(`http://localhost:5000/todos/${id}`, updates);
    dispatch(updateTodoSuccess(id, updates));
  } catch (error) {
    console.error('Error updating todo:', error);
  }
};

export const deleteTodo = id => async dispatch => {
  try {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    dispatch(deleteTodoSuccess(id));
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};

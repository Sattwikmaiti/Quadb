// TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, deleteTodo } from '../redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./TodoList.css"
function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = React.useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo({ title: newTodo }));
      setNewTodo('');
      toast.success('Todo added successfully!');
    } else {
      toast.error('Please enter a valid todo!');
    }
  };

  const handleToggle = todo => {
    dispatch(updateTodo(todo._id, { completed: !todo.completed }));
  };

  const handleDelete = todo => {
    dispatch(deleteTodo(todo._id));
    toast.error('Todo deleted successfully!');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <h1 className="text-3xl font-bold mb-8">Todo List</h1>
      <div className="add-todo flex items-center mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          className="px-4 py-2 border border-gray-300 rounded-md mr-2"
        />
        <button onClick={handleAddTodo} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Add
        </button>
      </div>
      <ul className="todo-list w-96">
        {todos.map(todo => (
          <li key={todo._id} className="flex items-center justify-between py-2 px-4 border-b border-gray-300 item">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo)}
                className="mr-2"
              />
              <span className={todo.completed ? 'completed' : ''}>{todo.title}</span>
            </div>
            <button onClick={() => handleDelete(todo)} className="text-red-500 hover:text-red-700">
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default TodoList;

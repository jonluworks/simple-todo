import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({todos, removeTodo}) => {

  const deleteTodo = index => {
    removeTodo(index);
  };

  const renderTodos = () => todos.map( (todo, index) => (
    <li key={index} >
      <button onClick={() => {deleteTodo(index)}}>X</button>
      {todo.text}
    </li>
  ));

  return (
    <ul>
      {renderTodos()}
    </ul>
  )
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
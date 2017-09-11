import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({todos}) => {

  const renderTodos = () => todos.map( (todo, index) => <li key={index} >{todo.text}</li>);

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
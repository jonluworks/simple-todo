import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddTodo from "./addTodo/AddTodo.component";
import { submitTodo } from "./addTodo/AddTodo.actions";
import TodoList from "./todoList/TodoList.component";

export const App = ({submitTodo, todos}) => {
  return (
      <div>
        <h1>Todo List</h1>
        <AddTodo submitTodo={submitTodo}/>
        <TodoList todos={todos}/>
      </div>
  );
};

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};


const mapStateToProps = state => state.TodoReducer;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(submitTodo(text))
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

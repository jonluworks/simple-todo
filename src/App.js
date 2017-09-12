import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddTodo from "./addTodo/AddTodo.component";
import { submitTodo } from "./addTodo/AddTodo.actions";
import TodoList from "./todoList/TodoList.component";
import {removeTodo, undoTodo} from "./todoList/TodoList.actions";

export const App = ({submitTodo, todos, lastDeleted, removeTodo, undoTodo}) => {
  console.log(lastDeleted)
  return (
      <div>
        <h1>Todo List</h1>
        <AddTodo submitTodo={submitTodo}/>
        <button disabled={lastDeleted ? false : true} onClick={undoTodo}>Undo Delete</button>
        <TodoList removeTodo={removeTodo} todos={todos}/>
      </div>
  );
};

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  undoTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};


const mapStateToProps = state => state.TodoReducer;

const mapDispatchToProps = dispatch => ({
  submitTodo: text => {
    if (text) {
      dispatch(submitTodo(text));
    }
  },
  removeTodo: index => {
    dispatch(removeTodo(index));
  },
  undoTodo: () => {
    dispatch(undoTodo());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

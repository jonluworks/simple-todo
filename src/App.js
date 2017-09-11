import React from 'react';
import { connect } from 'react-redux';

import AddTodo from "./addTodo/AddTodo.component";
import { submitTodo } from "./addTodo/AddTodo.actions";

export const App = () => {
  return (
      <div>
        <h1>Todo List</h1>
        <AddTodo submitTodo={submitTodo}/>
      </div>
  );
};

const mapStateToProps = state => state.TodoReducer;

const mapDispatchToProps = dispatch => ({
  submitTodo: text => {
    if (text) {
      dispatch(submitTodo(text))
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

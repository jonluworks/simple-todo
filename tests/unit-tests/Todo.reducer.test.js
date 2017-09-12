import test from 'tape';

import { TodoReducer } from '../../src/reducers/Todo.reducer';
import { SUBMIT_TODO } from "../../src/addTodo/AddTodo.actions";
import {REMOVE_TODO} from "../../src/todoList/TodoList.actions";

test('testing initial state of root reducer', assert => {

  const expectedState = {
    todos: []
  };

  assert.deepEqual(TodoReducer(undefined, {type:null}), expectedState,
    'the rootReducer should return initial state when no state is passed');
  assert.end();

});

test('testing adding an action using the submit todo action', assert => {
  const todoText = 'this is a todo';

  const todoAction = {
    type: SUBMIT_TODO,
    text: todoText
  };

  const expectedState = {
    todos: [
      {
        text: todoText
      }
    ]
  };

  assert.deepEqual(TodoReducer(undefined, todoAction), expectedState,
    'the rootReducer should return the correct state when given an action');

  assert.end();
});

test('test removing a todo using remove todo action', assert => {
  const indexToRemove = 2;

  const todoAction = {
    type: REMOVE_TODO,
    index: indexToRemove,
  };

  const initialState = {
    todos: [
      { text: 'todo 1'},
      { text: 'todo 2'},
      { text: 'todo 3'},
      { text: 'todo 4'},
      { text: 'todo 5'},
      { text: 'todo 6'},
    ]
  };

  const expectedState = {
    todos: [
      { text: 'todo 1'},
      { text: 'todo 2'},
      { text: 'todo 4'},
      { text: 'todo 5'},
      { text: 'todo 6'},
    ]
  };

  assert.deepEqual(TodoReducer(initialState, todoAction), expectedState,
    'we should be able to remove a todo by index');

  assert.end();
});
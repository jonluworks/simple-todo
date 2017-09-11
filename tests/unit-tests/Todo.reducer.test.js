import test from 'tape';

import { TodoReducer } from '../../src/reducers/Todo.reducer';
import { SUBMIT_TODO } from "../../src/addTodo/AddTodo.actions";

test('testing initial state of root reducer', assert => {

  const expectedState = {
    todos: []
  };

  assert.deepEqual(TodoReducer(undefined, {type:null}), expectedState,
    'the rootReducer should return initial state when no state is passed');
  assert.end();

});

test('testing putting an action through the root reducer', assert => {
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

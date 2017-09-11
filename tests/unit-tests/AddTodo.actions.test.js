import { SUBMIT_TODO, submitTodo } from '../../src/addTodo/AddTodo.actions';
import test from 'tape';

test('testing todo action creator', assert => {
  const todoText = 'A todo';
  const expectedAction = {
    type: SUBMIT_TODO,
    text: todoText
  };

  assert.deepEqual(submitTodo(todoText), expectedAction,
    'add todo should create an action to add a todo');
  assert.end();

});
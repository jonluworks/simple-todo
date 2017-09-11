import { SUBMIT_TODO, submitTodo } from '../../src/addTodo/AddTodo.actions';
import test from 'tape';

test('add todo should create an action to add a todo', assert => {
  const todoText = 'A todo';
  const expectedAction = {
    type: SUBMIT_TODO,
    id: 1,
    text: todoText
  };

  assert.deepEqual(submitTodo(todoText), expectedAction);
  assert.end();

});
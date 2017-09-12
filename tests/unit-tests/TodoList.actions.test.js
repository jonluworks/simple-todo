import test from 'tape';
import { REMOVE_TODO, removeTodo } from '../../src/todoList/TodoList.actions';

test('testing todoList actions', assert => {
  const index = 4;
  const expected = {
    type: REMOVE_TODO,
    index,
  };

  assert.deepEqual(removeTodo(index), expected,
    'the action creator should create the correct action to remove a todo');

  assert.end();

});
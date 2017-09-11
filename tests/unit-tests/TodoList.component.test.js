import React from 'react';
import test from 'tape';

import createComponent from 'react-unit';

import TodoList from '../../src/todoList/TodoList.component';

test('testing TodoList component', assert => {
  const component = createComponent(<TodoList todos={['a todo']}/>);
  assert.ok(component, 'component should exist');
  assert.equal(component.findByQuery('li').length, 1, 'list should hold one item');

  assert.end();

});
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import createComponent from 'react-unit';

import tape from 'tape';
import jsxEquals from '../utils/reactElementToJsxString';
import addAssertions from 'extend-tape';

import AddTodo from '../../src/addTodo/AddTodo.component';

const test = addAssertions(tape, { jsxEquals});
const renderer = new ShallowRenderer();

test('testing AddTodo component', assert => {
  const submitTodo = function() {};

  const component = createComponent(<AddTodo submitTodo={submitTodo} />);
  assert.ok(component, 'component should exist');
  assert.equal(component.findByQuery('input').length, 1,
    'component should have an input');
  assert.equal(component.findByQuery('.todo-submit').length, 1,
    'component should have a submit');

  assert.end();

});
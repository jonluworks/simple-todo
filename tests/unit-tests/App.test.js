import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import createComponent from 'react-unit';

import tape from 'tape';
import jsxEquals from '../utils/reactElementToJsxString';
import addAssertions from 'extend-tape';


import { App } from '../../src/App';

const test = addAssertions(tape, { jsxEquals });
const renderer = new ShallowRenderer();

test('testing proper output of App component', (assert) => {
  const removeTodo = function() {};
  const undoTodo = function() {};
  const submitTodo = function() {};
  const component = createComponent(<App submitTodo={submitTodo}
                                         todos={[]}
                                         removeTodo={removeTodo}
                                         undoTodo={undoTodo} />);

  assert.ok(component, 'component cam be created');

  assert.end();
});
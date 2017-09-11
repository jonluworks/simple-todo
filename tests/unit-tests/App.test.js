import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import createComponent from 'react-unit';

import tape from 'tape';
import jsxEquals from '../utils/reactElementToJsxString';
import addAssertions from 'extend-tape';


import { App } from '../../src/App';

const test = addAssertions(tape, { jsxEquals });
const renderer = new ShallowRenderer();
const submitTodo = function () {

}

test('testing proper output of App component', (assert) => {
  const component = createComponent(<App submitTodo={()=>{}} todos={[]} />);

  assert.ok(component, 'component cam be created');

  assert.end();
});
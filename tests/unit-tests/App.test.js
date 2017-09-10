import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import createComponent from 'react-unit';

import tape from 'tape';
import jsxEquals from '../utils/reactElementToJsxString';
import addAssertions from 'extend-tape';


import App from '../../src/App';

const test = addAssertions(tape, { jsxEquals });
const renderer = new ShallowRenderer();

test('testing proper output of App component', (assert) => {
  const component = createComponent(<App/>);

  assert.equal(component.props.className, 'app-class');

  renderer.render(<App/>);

  const expected = (
    <div className='app-class'>
      <h1>
        My App
      </h1>
    </div>
  );

  const actual = renderer.getRenderOutput();

  assert.jsxEquals(actual, expected);
  assert.end();
});
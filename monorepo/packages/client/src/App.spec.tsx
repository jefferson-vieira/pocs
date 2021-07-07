import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<App />).toJSON();

    expect(wrapper).toMatchInlineSnapshot(`
      <main>
        <h1>
          Loading...
        </h1>
      </main>
    `);
  });
});

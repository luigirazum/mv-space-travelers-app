import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import Rockets from '../pages/Rockets';

describe('Rockets Home Page component', () => {
  it('renders properly', () => {
    const tree = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});

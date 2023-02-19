import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import Missions from '../pages/Missions';

describe('Missions Page component', () => {
  it('renders properly', () => {
    const tree = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});

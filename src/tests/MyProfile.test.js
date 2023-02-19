import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import MyProfile from '../pages/MyProfile';

describe('My Profile Page component', () => {
  it('renders properly', () => {
    const tree = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});

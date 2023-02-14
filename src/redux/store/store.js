import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketsReducer from '../rockets/rockets';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    middleware: [thunk],
  },
});

export default store;

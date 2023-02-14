import { configureStore } from '@reduxjs/toolkit';
import stateReducer from '../status/statusSlice';

const store = configureStore({
  reducer: {
    status: stateReducer,
  },
});

export default store;

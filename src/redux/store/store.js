import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketsReducer from '../rockets/rockets';
import missionsReducer from '../missions/missions';

const rootReducer = {
  rockets: rocketsReducer,
  missions: missionsReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;

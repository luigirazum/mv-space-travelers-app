import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from '../api/apiSettings';

/**
 * action types for ROCKETS
 */
const PREFIX = 'spaceTravelers/rockets';
const FETCH_ROCKETS = `${PREFIX}/FETCH_ROCKETS`;

/**
 * get the Rockets available from the API
 */
const fetchRockets = createAsyncThunk(
  FETCH_ROCKETS,
  async () => {
    const response = await
    fetch(request('GET_ROCKETS'));
    return response.json();
  },
);

const initialState = {
  rockets: [],
  loading: false,
  error: null,
};

/**
 * slicer for ROCKETS
 */
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchRockets.pending,
        (state) => ({
          ...state,
          loading: true,
          error: null,
        }),
      )
      .addCase(
        fetchRockets.fulfilled,
        (state, action) => {
          const { payload } = action;
          return {
            ...state,
            rockets: payload,
            loading: false,
          };
        },
      )
      .addCase(
        fetchRockets.rejected,
        (state, action) => {
          const { message } = action.error;
          return {
            ...state,
            loading: false,
            error: message,
          };
        },
      );
  },
});

/** actions for fetchRockets */
export { fetchRockets };

/** export reducer for rockets */
const { reducer } = rocketsSlice;
export default reducer;

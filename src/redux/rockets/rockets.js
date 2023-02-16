import { createAction, createSlice } from '@reduxjs/toolkit';
import asyncFetch, { GET_ROCKETS } from '../api/apiSettings';

/**
 * action types for ROCKETS
 */
const PREFIX = 'spaceTravelers/rockets';
const FETCH_ROCKETS = `${PREFIX}/FETCH_ROCKETS`;
const RESERVE_ROCKET = `${PREFIX}/RESERVE_ROCKET`;
const CANCEL_RESERVED_ROCKET = `${PREFIX}/CANCEL_RESERVED_ROCKET`;

/**
 * action creators for ROCKETS
 */
const reserveRocket = createAction(RESERVE_ROCKET);
const cancelReservedRocket = createAction(CANCEL_RESERVED_ROCKET);

/**
 * get the Rockets available from the API
 */
const fetchRockets = asyncFetch(FETCH_ROCKETS, GET_ROCKETS);

const initialState = {
  inventory: [],
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
          const selectData = payload.map((rocket) => {
            const {
              id, name, description, flickr_images: images,
            } = rocket;
            return {
              id, name, description, images,
            };
          });
          return {
            ...state,
            inventory: selectData,
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
      )
      .addCase(
        reserveRocket,
        (state, action) => {
          const { inventory } = state;

          const newInventory = inventory.map((rocket) => {
            if (rocket.id !== action.payload) {
              return rocket;
            }
            return { ...rocket, reserved: true };
          });

          return {
            ...state,
            inventory: newInventory,
          };
        },
      )
      .addCase(
        cancelReservedRocket,
        (state, action) => {
          const { inventory } = state;

          const newInventory = inventory.map((rocket) => {
            if (rocket.id !== action.payload) {
              return rocket;
            }
            return { ...rocket, reserved: false };
          });

          return {
            ...state,
            inventory: newInventory,
          };
        },
      );
  },
});

/** actions for fetchRockets */
export { fetchRockets, reserveRocket, cancelReservedRocket };

/** export reducer for rockets */
const { reducer } = rocketsSlice;
export default reducer;

import { createAction, createSlice } from '@reduxjs/toolkit';
import asyncFetch, { GET_MISSIONS } from '../api/apiSettings';

/**
 * action types for MISSIONS
 */
const PREFIX = 'spaceTravelers/missions';
const CHECK_MISSIONS_STATUS = `${PREFIX}/CHECK_MISSIONS_STATUS`;
const FETCH_MISSIONS = `${PREFIX}/FETCH_MISSIONS`;

/**
 * action creators for MISSIONS
 */
const checkMissionsStatus = createAction(CHECK_MISSIONS_STATUS);

/**
 * get the Missions available from the API
 */
const fetchMissions = asyncFetch(FETCH_MISSIONS, GET_MISSIONS);

const initialState = {
  avaliable: [],
  loading: false,
  error: null,
};

/**
 * slicer for MISSIONS
 */
const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchMissions.pending,
        (state) => ({
          ...state,
          loading: true,
          error: null,
        }),
      )
      .addCase(
        fetchMissions.fulfilled,
        (state, action) => {
          const { payload } = action;
          const selectData = payload.map((mission) => {
            const {
              mission_id: id, mission_name: name, description,
            } = mission;
            return {
              id, name, description,
            };
          });
          return {
            ...state,
            avaliable: selectData,
            loading: false,
          };
        },
      )
      .addCase(
        fetchMissions.rejected,
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
        checkMissionsStatus,
        (state) => {
          const { avaliable } = state;
          const message = avaliable
            ? 'We are working hard on new Missions. 👩‍🚀 We\'ll be ready for launch very soon. 🚀'
            : null;
          return {
            ...state,
            message,
          };
        },
      );
  },
});

/** actions available for Missions */
export { fetchMissions, checkMissionsStatus };

/** export reducer for missions */
const { reducer } = missionsSlice;
export default reducer;

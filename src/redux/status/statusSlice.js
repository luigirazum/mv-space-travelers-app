import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
};

const stateStatus = createSlice({
  name: 'status',
  initialState,
  reducers: {
    busy: (state) => ({
      ...state,
      status: 'busy',
    }),
  },
});

const { busy } = stateStatus.actions;

const selectStatus = (state) => state.status.value;

export { busy };
export { selectStatus };

export default stateStatus;

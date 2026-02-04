import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const takeInput = createSlice({
  name: 'user',
  initialState, 
  reducers: {
    updateData: (state, action) => {
        state.push(action.payload);
    },
    reset: () => initialState
  }
});

export const { updateData, reset } = takeInput.actions;
export default takeInput.reducer;
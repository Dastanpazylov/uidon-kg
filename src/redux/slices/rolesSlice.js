import { createSlice } from '@reduxjs/toolkit';

const roleSlice = createSlice({
  name: 'roleSlice',
  initialState: {type:'executor'},
  reducers: {
    setRole: (state, action) => {
      state.type = action.payload
    },
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;

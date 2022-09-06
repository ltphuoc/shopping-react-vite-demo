import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increase(state, payload) {
      console.log(payload.payload);
      return state + 1;
    },
    decrease(state) {
      return state - 1;
    }
  }
});

const { reducer, actions } = counterSlice;
export const { increase, decrease } = actions;

export default reducer;

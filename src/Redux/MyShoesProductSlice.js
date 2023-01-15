import {createSlice} from '@reduxjs/toolkit';

const MyShoesProductSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    addMyProducts(state, action) {
      state.push(action.payload);
    },
    increaseQty(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload) {
          myindex = index;
        }
      });
      if (myindex == -1) {
      } else {
        state[myindex].qty = state[myindex].qty + 1;
      }
    },
    decreaseQty(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload) {
          myindex = index;
        }
      });
      if (myindex == -1) {
      } else {
        state[myindex].qty = state[myindex].qty - 1;
      }
    },
  },
});
export const {addMyProducts, increaseQty, decreaseQty} =
  MyShoesProductSlice.actions;
export default MyShoesProductSlice.reducer;

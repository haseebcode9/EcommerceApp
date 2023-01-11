import {createSlice} from '@reduxjs/toolkit';
// import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const MyCartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProductToMyCart(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      if (myindex == -1) {
        state.push({
          brand: action.payload.brand,
          id: action.payload.id,
          productName: action.payload.productName,
          productPrice: action.payload.productPrice,
          productImage: action.payload.productImage,
          qty: action.payload.qty + 1,
        });
      } else {
        state[myindex].qty = state[myindex].qty + 1;
      }
    },
    removeMyCartItem(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      if (myindex == -1) {
      } else {
        state[myindex].qty = state[myindex].qty - 1;
      }
    },
    deleteMyCartItem(state, action) {
      return (state = state.filter(item => item.id !== action.payload));
    },
  },
});
export const {addProductToMyCart, removeMyCartItem, deleteMyCartItem} =
  MyCartSlice.actions;
export default MyCartSlice.reducer;

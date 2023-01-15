import {configureStore} from '@reduxjs/toolkit';
import MyProductReducer from '../Redux/MyProductSlice';
import MyShoesProductSlice from '../Redux/MyShoesProductSlice';
import MyCartReducer from '../Redux/MyCartSlice';

export const mystore = configureStore({
  reducer: {
    product: MyProductReducer,
    cart: MyCartReducer,
    shoesProduct: MyShoesProductSlice,
  },
});

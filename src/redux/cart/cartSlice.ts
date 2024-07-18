import { createSlice } from "@reduxjs/toolkit";
import { fetchPutCart, fetchUserCartById } from "./cartThunkActions";
import { ICartInfo } from "../../types/types";

export interface ICartState {
  cartInfo: ICartInfo;
  isLoading: boolean;
}

export const initialCart: ICartInfo = {
  id: 0,
  products: [],
  total: 0,
  discountedTotal: 0,
  userId: 0,
  totalProducts: 0,
  totalQuantity: 0,
};

const initialState: ICartState = {
  cartInfo: initialCart,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: "cartSlise",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserCartById.fulfilled, (state, { payload }) => {
      state.cartInfo = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUserCartById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPutCart.fulfilled, (state, { payload }) => {
      state.cartInfo = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPutCart.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default cartSlice.reducer;

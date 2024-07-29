import { createSlice } from "@reduxjs/toolkit";
import { fetchPutCart, fetchUserCartById } from "./cartThunkActions";
import { ICartInfo } from "../../types/types";
import { IError } from "../../routes/ErrorPage/ErrorPage";

export interface ICartState {
  cartInfo: ICartInfo;
  isLoading: boolean;
  isError: boolean;
  error: IError | null;
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
  isError: false,
  error: null,
};

export const cartSlice = createSlice({
  name: "cartSlice",
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
      state.cartInfo = payload as ICartInfo;
      state.isLoading = false;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(fetchPutCart.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(fetchPutCart.rejected, (state, { payload }) => {
      state.isError = true;
      state.error = payload as IError;
      state.isLoading = false;
    });
  },
});

export default cartSlice.reducer;

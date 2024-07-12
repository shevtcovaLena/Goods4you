import { createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../store";
import { fetchUserCartById } from "./cartThunkActions";
import { ICartInfo } from "../../types/types";
import { getProductsTable } from "../../helpers/getCartProductsTable";

export interface ICartState {
  cartInfo: ICartInfo;
  cartMap: Record<string, number> | null;
  isLoading: boolean;
}

const initialState: ICartState = {
  cartInfo: {
    id: 0,
    products: [],
    total: 0,
    discountedTotal: 0,
    userId: 0,
    totalProducts: 0,
    totalQuantity: 0,
  },
  cartMap: null,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: "cartSlise",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserCartById.fulfilled, (state, { payload }) => {
        state.cartInfo = payload;
        state.cartMap = getProductsTable(payload.products);
        console.log(state.cartMap);        
        state.isLoading = false;
    });
    builder.addCase(fetchUserCartById.pending, (state) => {
        state.isLoading = true;
    });
  },
});

export default cartSlice.reducer;

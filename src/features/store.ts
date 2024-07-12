import { ConfigureStoreOptions, configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./products/productsApi";
import cartSlice from "./cart/cartSlice";

const storeOptions: ConfigureStoreOptions = {
  reducer: {
    cartSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
};

export const store = configureStore(storeOptions);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

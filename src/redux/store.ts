import { ConfigureStoreOptions, configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./products/productsApi";
import cartSlice from "./cart/cartSlice";
import userSlice from "./user/userSlice";
import { userApi } from "./user/userApi";

const storeOptions: ConfigureStoreOptions = {
  reducer: {
    cartSlice,
    userSlice,
    [productsApi.reducerPath]: productsApi.reducer,   
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(userApi.middleware),
};

export const store = configureStore(storeOptions);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

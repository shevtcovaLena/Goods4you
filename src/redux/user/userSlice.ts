import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/types";

export interface ICartState {
  isAuth: boolean;
  userInfo: IUser | null;
}

const initialState: ICartState = {
  isAuth: false,
  userInfo: null,
};

export const userSlice = createSlice({
  name: "userSlise",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
        state.userInfo = action.payload;
        state.isAuth = true;
      },
    unSetUser: (state) => {
        state.userInfo = null;
        state.isAuth = false;
      },    
  },
});


export const { setUser, unSetUser } = userSlice.actions;
export default userSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICartInfo } from "../../types/types";
import { initialCart } from "./cartSlice";
import { IError } from "../../routes/ErrorPage/ErrorPage";

interface IGetUserCartArgs {
  id: number;
  token: string;
}

export const fetchUserCartById = createAsyncThunk<ICartInfo, IGetUserCartArgs>(
  "cart/one",
  async ({ id, token }: IGetUserCartArgs) => {
    try {
      const response = await axios.get<{ carts: ICartInfo[] }>(
        `https://dummyjson.com/carts/user/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.carts.length ? response.data.carts[0] : initialCart;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

interface IPutCartArgs {
  cart: ICartInfo;
  token: string;
}

export const fetchPutCart = createAsyncThunk<ICartInfo, IPutCartArgs, { rejectValue: IError }>(
  "cart/update",
  async ({ cart, token }: IPutCartArgs, { rejectWithValue }) => {
    try {
      const response = await axios.put<ICartInfo>(
        `https://dummyjson.com/carts/${cart.id}`,
        { merge: false, products: cart.products },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error as IError);
    }
  }
);

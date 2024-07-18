import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICartInfo } from "../../types/types";
import { initialCart } from "./cartSlice";

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

export const fetchPutCart = createAsyncThunk<ICartInfo, IPutCartArgs>(
  "cart/update",
  async ({ cart, token }: IPutCartArgs) => {
    try {
      const response = await axios.put<ICartInfo>(
        `https://dummyjson.com/carts/${cart.id}`,
        {merge: false, products: cart.products},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);


/* adding products in cart with id 1 */
// fetch('https://dummyjson.com/carts/1', {
//   method: 'PUT', /* or PATCH */
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     merge: true, // this will include existing products in the cart
//     products: [
//       {
//         id: 1,
//         quantity: 1,
//       },
//     ]
//   })
// })
// .then(res => res.json())
// .then(console.log);
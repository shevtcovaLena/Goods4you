import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICartInfo } from '../../types/types';

export const fetchUserCartById = createAsyncThunk<ICartInfo, number>(
  'cart/one',
  async (id: number) => {
    try {
      const response = await axios.get<{ carts: ICartInfo[] }>(`https://dummyjson.com/carts/user/${id}`);
      if (response.status === 200) {
        return response.data.carts[0];
      } else {
        throw new Error('Ошибка при получении данных корзины');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
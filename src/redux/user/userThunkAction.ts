import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICartInfo } from '../../types/types';

export const fetchUser = createAsyncThunk<ICartInfo, number>(
  'user/login',
  async (id: number) => {
    try {
      const response = await axios.post<{ carts: ICartInfo[] }>(`https://dummyjson.com/auth/login`);
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

// Thunk для получения данных о пользователе
// export const fetchUser = createAsyncThunk('auth/fetchUser', async () => {
//   const token = localStorage.getItem('token');
//   const response = await axios.get('https://dummyjson.com/auth/me', {
//     headers: { Authorization: `Bearer ${token}` }
//   });
//   return response.data;
// });

// fetch('https://dummyjson.com/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
    
//     username: 'emilys',
//     password: 'emilyspass',
//     expiresInMins: 30, // optional, defaults to 60
//   })
// })
// .then(res => res.json())
// .then(console.log);
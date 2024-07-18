import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IFormData, IUser } from '../../types/types';

export const fetchLoginUser = createAsyncThunk<IUser, IFormData>(
  'user/login',
  async (form: IFormData) => {
    try {
      const response = await axios.post(`https://dummyjson.com/auth/login`,
        form,
      );
      if (response.status === 200) {
        localStorage.setItem('authToken', response.data.token);
        return response.data;
      } else {
        throw new Error('Auth error');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

//Thunk для получения данных о пользователе
export const fetchUserByToken = createAsyncThunk('auth/fetchUser', async () => {
  const token = localStorage.getItem('authToken');
  const response = await axios.get('https://dummyjson.com/auth/me', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
});

// credentials);
// localStorage.setItem('token', response.data.token);
// return response.data;


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
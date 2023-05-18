import { createSlice } from '@reduxjs/toolkit';

import { loginAsyncAction } from '@/common/redux';
import { IAuthData } from '@/common/types';

interface IAuthSlice extends IAuthData {
  isLogged: boolean;
  isLoading: boolean;
}

const NOT_AUTHORIZED_USER_ERROR_MESSAGE = 'Пользователь не авторизован';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    apiTokenInstance: '',
    idInstance: '',
    isLogged: false,
    isLoading: false,
  } as IAuthSlice,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsyncAction.pending, (draft) => {
        draft.isLoading = true;
      })
      .addCase(loginAsyncAction.rejected, (draft) => {
        draft.isLoading = false;
        alert(NOT_AUTHORIZED_USER_ERROR_MESSAGE);
      })
      .addCase(loginAsyncAction.fulfilled, (draft, { meta, payload }) => {
        const { stateInstance } = payload;
        if (stateInstance !== 'authorized') {
          draft.isLoading = false;
          return alert(NOT_AUTHORIZED_USER_ERROR_MESSAGE);
        }

        draft.isLoading = false;
        draft.isLogged = true;
        draft.apiTokenInstance = meta.arg.apiTokenInstance;
        draft.idInstance = meta.arg.idInstance;
      });
  },
});

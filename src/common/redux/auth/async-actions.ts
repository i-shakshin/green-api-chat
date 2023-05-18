import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAuthData } from '@/common/types';

interface ILoginResponse {
  stateInstance: string;
}

export const loginAsyncAction = createAsyncThunk(
  'auth/login',
  async (form: IAuthData) => {
    const response = await fetch(
      `https://api.green-api.com/waInstance${form.idInstance}/getStateInstance/${form.apiTokenInstance}`
    );

    return (await response.json()) as ILoginResponse;
  }
);

export const setSettingsAsyncAction = createAsyncThunk(
  'auth/setSettings',
  (form: IAuthData) =>
    fetch(
      `https://api.green-api.com/waInstance${form.idInstance}/SetSettings/${form.apiTokenInstance}`,
      {
        body: JSON.stringify({
          incomingWebhook: 'yes',
        }),
        method: 'POST',
      }
    )
);

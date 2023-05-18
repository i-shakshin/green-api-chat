import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAuthData } from '@/common/types';
import { chatIdTransformer } from '@/common/utils';

interface ISendMessageBody extends IAuthData {
  chatId: string;
  message: string;
}

interface IReturnedMessage {
  receiptId: string;
  body: {
    timestamp: number;
    idMessage: string;
    senderData: {
      chatId: string;
      chatName?: string;
    };
    messageData: {
      textMessageData: {
        textMessage: string;
      };
    };
  };
}

export const sendMessageAsyncAction = createAsyncThunk(
  'main/sendMessage',
  async ({ idInstance, apiTokenInstance, ...body }: ISendMessageBody) => {
    body.chatId = chatIdTransformer.encode(body.chatId);
    const response = await fetch(
      `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
      {
        body: JSON.stringify(body),
        method: 'POST',
      }
    );
    const data = await response.json();

    return data.idMessage as string;
  }
);

export const getMessageAsyncAction = createAsyncThunk(
  'main/getMessage',
  async (body: IAuthData, { fulfillWithValue }) => {
    try {
      const response = await fetch(
        `https://api.green-api.com/waInstance${body.idInstance}/ReceiveNotification/${body.apiTokenInstance}`
      );

      const content: IReturnedMessage = await response.json();

      await fetch(
        `https://api.green-api.com/waInstance${body.idInstance}/DeleteNotification/${body.apiTokenInstance}/${content.receiptId}`,
        { method: 'DELETE' }
      );

      return content.body;
    } catch (e) {
      return fulfillWithValue(null);
    }
  }
);

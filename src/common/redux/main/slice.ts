import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getMessageAsyncAction, sendMessageAsyncAction } from '@/common/redux';
import { IChat } from '@/common/types';
import { chatIdTransformer } from '@/common/utils';

interface IMainSlice {
  chats: IChat[];
}

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    chats: [],
  } as IMainSlice,
  reducers: {
    createChat: (draft, { payload: userId }: PayloadAction<string>) => {
      if (draft.chats.find((chat) => chat.chatId === userId)) {
        return;
      }

      draft.chats.push({
        chatId: userId,
        messages: [],
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessageAsyncAction.fulfilled, (draft, { meta, payload }) => {
        const chat = draft.chats.find(
          (chat) => chat.chatId === meta.arg.chatId
        );

        if (!chat) {
          return;
        }

        chat.messages.push({
          id: payload,
          isSelfMessage: true,
          content: meta.arg.message,
        });
      })
      .addCase(getMessageAsyncAction.fulfilled, (draft, { payload }) => {
        if (!payload) {
          return;
        }

        const chatId = chatIdTransformer.decode(payload.senderData.chatId);

        const chat = draft.chats.find((chat) => chat.chatId === chatId);

        if (!chat) {
          return;
        }

        chat.messages.push({
          isSelfMessage: false,
          content: payload.messageData.textMessageData.textMessage,
          id: payload.idMessage,
        });
      });
  },
});

export const mainActions = mainSlice.actions;

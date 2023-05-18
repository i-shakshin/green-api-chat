import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  getMessageAsyncAction,
  mainActions,
  RootState,
  sendMessageAsyncAction,
  setSettingsAsyncAction,
  useAppDispatch,
} from '@/common/redux';

import { Chat } from './components/Chat.tsx';
import { ChatsList } from './components/ChatsList.tsx';

export const MainPage = () => {
  const [selectedChat, setSelectedChat] = useState<string>();

  const dispatch = useAppDispatch();
  const { idInstance, apiTokenInstance, chats } = useSelector(
    (state: RootState) => ({
      idInstance: state.auth.idInstance,
      apiTokenInstance: state.auth.apiTokenInstance,
      chats: state.main.chats,
    })
  );

  useEffect(() => {
    dispatch(setSettingsAsyncAction({ apiTokenInstance, idInstance }));
  }, [apiTokenInstance, dispatch, idInstance]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(
        getMessageAsyncAction({
          apiTokenInstance,
          idInstance,
        })
      );
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [apiTokenInstance, dispatch, idInstance]);

  const sendMessage = (message: string) => {
    if (!selectedChat) {
      return;
    }

    dispatch(
      sendMessageAsyncAction({
        idInstance,
        apiTokenInstance,
        message,
        chatId: selectedChat,
      })
    );
  };

  const createChat = (id: string) => {
    dispatch(mainActions.createChat(id));
  };

  const selectedChatMessages = useMemo(() => {
    if (!selectedChat) {
      return [];
    }

    return chats.find((chat) => chat.chatId === selectedChat)?.messages || [];
  }, [chats, selectedChat]);

  return (
    <section className="flex absolute bg-main-page-bg w-main-page-wrapper h-main-page-wrapper">
      <ChatsList
        chats={chats}
        selectedChatId={selectedChat}
        onCreateChat={createChat}
        onSelectChat={setSelectedChat}
      />
      {selectedChat && (
        <Chat
          messages={selectedChatMessages}
          onSendMessage={sendMessage}
          chatId={selectedChat}
        />
      )}
    </section>
  );
};

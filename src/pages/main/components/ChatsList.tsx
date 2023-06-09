import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { IChat } from '@/common/types';
import { Button, Input } from '@/common/ui';
import { hasErrors } from '@/common/utils';
import { createChatSchema, ICreateChatForm } from '@/pages';

import { ChatItem } from './ChatItem.tsx';

interface IProps {
  onCreateChat: (id: string) => void;
  onSelectChat: (id: string) => void;
  chats: IChat[];
  selectedChatId?: string;
}

export const ChatsList = ({
  chats,
  selectedChatId,
  onSelectChat,
  onCreateChat,
}: IProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICreateChatForm>({
    resolver: zodResolver(createChatSchema),
    mode: 'onBlur',
  });

  const handeCreateChat = (form: ICreateChatForm) => {
    onCreateChat(form.userId);
    reset();
  };

  return (
    <div className="flex flex-col w-chats-list">
      <form
        onSubmit={handleSubmit(handeCreateChat)}
        className="flex gap-2 p-2 bg-white border-b-2 border-login-page-input-bg"
      >
        <Input
          type="text"
          placeholder="Введите номер пользователя"
          className="bg-login-page-input-bg"
          error={errors.userId?.message}
          {...register('userId')}
        />
        <Button disabled={hasErrors(errors)}>Создать</Button>
      </form>
      <ul className="bg-white flex-1">
        {chats.map(({ chatId, messages }) => (
          <ChatItem
            key={chatId}
            chatId={chatId}
            isSelected={chatId === selectedChatId}
            onClick={onSelectChat}
            lastMessage={messages.at(-1)?.content}
          />
        ))}
      </ul>
    </div>
  );
};

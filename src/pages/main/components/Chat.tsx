import { useForm } from 'react-hook-form';

import { IMessage } from '@/common/types';
import { Button, Input } from '@/common/ui';

import { MessagesList } from './MessagesList.tsx';

interface IProps {
  chatId: string;
  messages: IMessage[];
  onSendMessage: (message: string) => void;
}

interface ISendMessageForm {
  message: string;
}

export const Chat = ({ messages, onSendMessage, chatId }: IProps) => {
  const { register, handleSubmit, reset } = useForm<ISendMessageForm>();

  const handleSendMessage = (form: ISendMessageForm) => {
    onSendMessage(form.message);
    reset();
  };

  return (
    <section className="w-chat flex flex-col bg-chat-bg bg-chat-bg-image">
      <section className="bg-white h-chat-header flex items-center pl-4 font-medium text-lg border-b-2 border-login-page-input-bg">
        {chatId}
      </section>
      <MessagesList messages={messages} />
      <form
        onSubmit={handleSubmit(handleSendMessage)}
        className="p-4 w-full flex gap-2 bg-main-page-bg"
      >
        <Input
          type="text"
          className="flex-1"
          placeholder="Введите сообщение"
          {...register('message')}
        />
        <Button>Отправить</Button>
      </form>
    </section>
  );
};

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { IMessage } from '@/common/types';
import { Button, Input } from '@/common/ui';
import { hasErrors } from '@/common/utils';
import { ISendMessageForm, sendMessageSchema } from '@/pages';

import { MessagesList } from './MessagesList.tsx';

interface IProps {
  messages: IMessage[];
  onSendMessage: (message: string) => void;
  displayName: string;
}

export const Chat = ({ messages, onSendMessage, displayName }: IProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISendMessageForm>({
    resolver: zodResolver(sendMessageSchema),
    mode: 'onBlur',
  });

  const handleSendMessage = (form: ISendMessageForm) => {
    onSendMessage(form.message);
    reset();
  };

  return (
    <section className="w-chat flex flex-col bg-chat-bg bg-chat-bg-image">
      <section className="bg-white h-chat-header flex items-center pl-4 font-medium text-lg border-b-2 border-login-page-input-bg">
        {displayName}
      </section>
      <MessagesList messages={messages} />
      <form
        onSubmit={handleSubmit(handleSendMessage)}
        className="p-4 w-full flex gap-2 bg-main-page-bg"
      >
        <Input
          isFullWidth
          type="text"
          className="flex-1"
          placeholder="Введите сообщение"
          {...register('message')}
        />
        <Button disabled={hasErrors(errors)}>Отправить</Button>
      </form>
    </section>
  );
};

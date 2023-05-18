import { IMessage } from '@/common/types';
import { getMessageTime } from '@/common/utils';

import { Message } from './Message.tsx';

interface IProps {
  messages: IMessage[];
}

export const MessagesList = ({ messages }: IProps) => {
  if (messages.length === 0) {
    return (
      <div className="flex flex-col flex-1 items-center pt-4">
        <span className="bg-white px-4 py-2 rounded-xl text-sm text-input-text-color">
          В этом чате нет сообщений
        </span>
      </div>
    );
  }

  return (
    <ul className="flex flex-col flex-1 p-10 gap-4">
      {messages.map((message) => (
        <Message
          key={message.id}
          content={message.content}
          isSelfMessage={message.isSelfMessage}
          time={getMessageTime(message.timestamp)}
        />
      ))}
    </ul>
  );
};

import { classNames } from '@/common/utils';

interface IProps {
  content: string;
  isSelfMessage: boolean;
  time: string;
}

export const Message = ({ content, isSelfMessage, time }: IProps) => {
  return (
    <li
      className={classNames(
        'flex flex-col gap-2 p-2 w-max max-w-chat-message rounded-lg shadow-md',
        {
          'bg-self-messages-bg self-end': isSelfMessage,
          'bg-white': !isSelfMessage,
        }
      )}
    >
      <span className="text-sm w-full break-words">{content}</span>
      <span className="text-xs self-end text-input-text-color">{time}</span>
    </li>
  );
};

import { classNames } from '@/common/utils';

interface IProps {
  content: string;
  isSelfMessage: boolean;
}

export const Message = ({ content, isSelfMessage }: IProps) => {
  return (
    <li
      className={classNames(
        'p-2 w-max max-w-chat-message break-words rounded-lg text-sm',
        {
          'bg-self-messages-bg self-end': isSelfMessage,
          'bg-white': !isSelfMessage,
        }
      )}
    >
      {content}
    </li>
  );
};

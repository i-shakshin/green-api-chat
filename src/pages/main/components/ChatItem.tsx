import { classNames } from '@/common/utils';

interface IProps {
  chatId: string;
  isSelected: boolean;
  onClick: (id: string) => void;
  lastMessage?: string;
}

export const ChatItem = ({
  chatId,
  isSelected,
  lastMessage = '',
  onClick,
}: IProps) => {
  return (
    <li
      key={chatId}
      onClick={() => onClick(chatId)}
      className={classNames(
        'p-4 flex flex-col hover:bg-gray-50 cursor-pointer',
        {
          'bg-main-page-bg': isSelected,
        }
      )}
    >
      <span className="text-l">{chatId}</span>
      <span className="text-sm text-input-text-color overflow-hidden overflow-ellipsis whitespace-nowrap">
        {lastMessage}
      </span>
    </li>
  );
};

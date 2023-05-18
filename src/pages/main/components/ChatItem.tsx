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
      className={'p-4 flex flex-col ' + (isSelected ? 'bg-main-page-bg' : '')}
    >
      <span className="text-l">{chatId}</span>
      <span className="text-sm text-input-text-color overflow-hidden overflow-ellipsis whitespace-nowrap">
        {lastMessage}
      </span>
    </li>
  );
};

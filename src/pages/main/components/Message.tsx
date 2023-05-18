interface IProps {
  content: string;
  isSelfMessage: boolean;
}

export const Message = ({ content, isSelfMessage }: IProps) => {
  return (
    <li
      className={
        'p-2  w-max max-w-chat-message break-words rounded-lg text-sm ' +
        (isSelfMessage ? 'bg-self-messages-bg self-end' : 'bg-white')
      }
    >
      {content}
    </li>
  );
};

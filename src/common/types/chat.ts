import { IMessage } from '@/common/types/message.ts';

export interface IChat {
  chatId: string;
  messages: IMessage[];
}

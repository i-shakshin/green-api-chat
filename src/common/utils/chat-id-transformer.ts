export class ChatIdTransformer {
  public encode(chatId: string): string {
    return `${chatId}@c.us`;
  }

  public decode(chatId: string): string {
    return chatId.replace('@c.us', '');
  }
}

export const chatIdTransformer = new ChatIdTransformer();

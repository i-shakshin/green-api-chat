import { z } from 'zod';

export const createChatSchema = z.object({
  userId: z
    .string()
    .length(11, 'Номер телефона должен состоять из 11 цифр')
    .refine(
      (value) => value.split('').every((digit) => !Number.isNaN(Number(digit))),
      {
        message: 'Номер телефона может содержать только цифры',
      }
    ),
});

export const sendMessageSchema = z.object({
  message: z
    .string()
    .min(1, 'Нельзя отправить пустое сообщение')
    .max(10000, 'Максимальный размер сообщения - 10000 символов'),
});

export type ICreateChatForm = z.infer<typeof createChatSchema>;

export type ISendMessageForm = z.infer<typeof sendMessageSchema>;

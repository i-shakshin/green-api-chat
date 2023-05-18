import { z } from 'zod';

export const authSchema = z.object({
  idInstance: z.preprocess(
    (value) => Number(value),
    z
      .number({
        invalid_type_error:
          'Идентификатор инстанса должен состоять только из цифр!',
      })
      .nonnegative()
  ),
  apiTokenInstance: z.string(),
});

export type IAuthData = z.infer<typeof authSchema>;

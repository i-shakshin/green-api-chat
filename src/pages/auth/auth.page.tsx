import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { loginAsyncAction, RootState, useAppDispatch } from '@/common/redux';
import { authSchema, IAuthData } from '@/common/types';
import { Button, Input } from '@/common/ui';
import { hasErrors } from '@/common/utils';

export const AuthPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthData>({
    resolver: zodResolver(authSchema),
    mode: 'onBlur',
  });

  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const dispatch = useAppDispatch();

  const onLogin = (data: IAuthData) => dispatch(loginAsyncAction(data));

  return (
    <section className="w-96 h-max bg-white rounded-xl">
      <form
        onSubmit={handleSubmit(onLogin)}
        className="flex flex-col items-center w-full h-full p-8 gap-8"
      >
        <h1 className="text-2xl">Авторизация</h1>
        <div className="flex flex-col gap-4">
          <Input
            type="text"
            className="bg-login-page-input-bg"
            placeholder="Идентификатор инстанса"
            disabled={isLoading}
            error={errors.idInstance?.message}
            {...register('idInstance')}
          />
          <Input
            type="password"
            className="bg-login-page-input-bg"
            placeholder="API токен"
            disabled={isLoading}
            error={errors.apiTokenInstance?.message}
            {...register('apiTokenInstance')}
          />
        </div>
        <Button disabled={hasErrors(errors)}>Войти</Button>
      </form>
    </section>
  );
};

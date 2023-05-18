import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { loginAsyncAction, RootState, useAppDispatch } from '@/common/redux';
import { IAuthData } from '@/common/types';
import { Button, Input } from '@/common/ui';

export const AuthPage = () => {
  const { register, handleSubmit } = useForm<IAuthData>();
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
            {...register('idInstance')}
          />
          <Input
            type="password"
            className="bg-login-page-input-bg"
            placeholder="API токен"
            disabled={isLoading}
            {...register('apiTokenInstance')}
          />
        </div>
        <Button>Войти</Button>
      </form>
    </section>
  );
};

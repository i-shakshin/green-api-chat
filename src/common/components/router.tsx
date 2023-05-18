import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { RootState } from '@/common/redux';
import { authRouter, notAuthRouter } from '@/common/utils';

export const Router = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLogged);

  return <RouterProvider router={isLoggedIn ? authRouter : notAuthRouter} />;
};

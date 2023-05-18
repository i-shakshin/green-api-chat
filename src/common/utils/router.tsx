import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { AuthPage, MainPage } from '@/pages';

const notAuthRoutes: RouteObject[] = [
  {
    path: '/*',
    element: <AuthPage />,
  },
];

const authRoutes: RouteObject[] = [
  {
    path: '/*',
    element: <MainPage />,
  },
];

export const notAuthRouter = createBrowserRouter(notAuthRoutes);
export const authRouter = createBrowserRouter(authRoutes);

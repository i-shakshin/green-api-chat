import { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="h-screen w-screen bg-app-bg flex items-center justify-center">
      <div className="h-bg-highlight-height w-screen bg-app-bg-highlight absolute top-0"></div>
      {children}
    </main>
  );
};

import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export const Button = ({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button
      {...props}
      className="bg-primary-button-bg text-white py-2.5 px-6 rounded-3xl"
    >
      {children}
    </button>
  );
};

import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { classNames } from '@/common/utils';

export const Button = ({
  children,
  disabled = false,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button
      {...props}
      className={classNames(
        'bg-primary-button-bg text-white py-2.5 px-6 rounded-3xl h-fit',
        { 'bg-opacity-70': disabled }
      )}
    >
      {children}
    </button>
  );
};

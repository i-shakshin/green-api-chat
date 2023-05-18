import { forwardRef, InputHTMLAttributes } from 'react';

import { classNames } from '@/common/utils';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  isFullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, IProps>(
  ({ className, error, isFullWidth = false, ...props }, ref) => {
    return (
      <div
        className={classNames('flex flex-col gap-2', { 'w-full': isFullWidth })}
      >
        <input
          {...props}
          ref={ref}
          className={
            'py-2 px-3 bg-white text-input-text-color rounded-lg ' + className
          }
        />
        {error && <span className="text-red-400 text-sm">{error}</span>}
      </div>
    );
  }
);

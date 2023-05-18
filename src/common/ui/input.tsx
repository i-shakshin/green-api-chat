import { forwardRef, InputHTMLAttributes } from 'react';

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={
        'py-2 px-3 bg-white text-input-text-color rounded-lg ' + className
      }
    />
  );
});

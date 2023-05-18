import { FieldErrors } from 'react-hook-form';

export const hasErrors = (errorsMap: FieldErrors) => {
  return Object.values(errorsMap).some((item) => !!item?.message);
};

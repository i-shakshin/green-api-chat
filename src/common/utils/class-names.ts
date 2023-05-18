type Argument = string | Record<string, boolean>;

export const classNames = (...args: Argument[]) => {
  const result: string[] = [];

  args.forEach((argument) => {
    if (typeof argument === 'string') {
      return result.push(argument);
    }

    Object.entries(argument).forEach(([name, expression]) => {
      if (!expression) {
        return;
      }

      result.push(name);
    });
  });

  return result.join(' ');
};

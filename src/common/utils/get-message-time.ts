export const getMessageTime = (timestamp: number): string => {
  const date = new Date(timestamp);

  return `${date.getHours()}:${date.getMinutes()}`;
};

export const getFormatDate = (date: Date | string) => {
  if (typeof date === 'string') date = new Date(date);
  return `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
};

export const getCurrentMonthTag = () => {
  const current = new Date();
  return `new-${current.getFullYear()}-${String(
    current.getMonth() + 1,
  ).padStart(2, '0')}`;
};

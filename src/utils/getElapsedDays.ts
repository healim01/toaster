export const getElapsedDays = (startDate: string | Date): number => {
  const start = new Date(startDate);
  const now = new Date();

  const msPerDay = 1000 * 60 * 60 * 24;

  const utc1 = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
  const utc2 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());

  return Math.floor((utc2 - utc1) / msPerDay);
};

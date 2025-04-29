import { saveAs } from 'file-saver';

export const downloadImageFromUrl = async (url: string, filename: string) => {
  const response = await fetch(url);
  const blob = await response.blob();
  saveAs(blob, filename);
};

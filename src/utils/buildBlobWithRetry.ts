import { toBlob } from 'html-to-image';

export const buildBlobWithRetry = async (
  element: HTMLElement,
  isMobile: boolean,
  minBlobSize = 500_000,
  maxAttempts = 10,
) => {
  let blob: Blob | null = null;
  let attempt = 0;

  while (attempt < maxAttempts) {
    blob = await toBlob(element, {
      cacheBust: true,
      pixelRatio: isMobile ? 2 : 3,
    });

    if (blob && blob.size > minBlobSize) {
      break;
    }

    attempt += 1;
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  return blob;
};

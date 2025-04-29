import { buildBlobWithRetry } from '@/utils/buildBlobWithRetry';
import { getFormatDate } from '@/utils/getFormatDate';
import { isSafari } from '@/utils/isSafari';
import saveAs from 'file-saver';
import { useState } from 'react';

const usePhotoDownload = (
  downloadDivRef: React.RefObject<HTMLDivElement | null>,
) => {
  // const downloadDivRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    if (!downloadDivRef.current || isLoading) return;

    setIsLoading(true);

    if (isSafari()) {
      alert(
        '💡 Safari 브라우저에서는 다운로드가 다소 느리거나 다르게 동작할 수 있습니다.',
      );
    }

    const images = downloadDivRef.current.querySelectorAll('img');
    const loadPromises = Array.from(images).map(
      img =>
        new Promise(resolve => {
          if (img.complete) return resolve(true);
          img.onload = () => resolve(true);
          img.onerror = () => resolve(true);
        }),
    );

    try {
      await Promise.all(loadPromises);
      if (isSafari()) {
        await new Promise(resolve => setTimeout(resolve, 3000));
      }

      const blob = await buildBlobWithRetry(downloadDivRef.current, isSafari());

      if (blob) {
        saveAs(blob, `toaster-booth-${getFormatDate(new Date())}.png`);
      } else {
        console.error('Blob 생성 실패 - Safari에서 이미지 누락 가능성 있음');
      }
    } catch (error) {
      console.error('Error converting div to image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleDownload, isLoading };
};

export default usePhotoDownload;

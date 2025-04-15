import { Button } from '@/components';
import { PhotoFrame } from '@/components/photo';
import { getFormatDate } from '@/utils/getFormatDate';
import saveAs from 'file-saver';
import { toBlob } from 'html-to-image';
import { useRef } from 'react';

const PhotoDownloadSection = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!divRef.current) return;

    const images = divRef.current.querySelectorAll('img');
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
      await toBlob(divRef.current, { cacheBust: true, pixelRatio: 4 });
      await toBlob(divRef.current, { cacheBust: true, pixelRatio: 4 });
      await toBlob(divRef.current, { cacheBust: true, pixelRatio: 4 });
      await toBlob(divRef.current, { cacheBust: true, pixelRatio: 4 });
      await toBlob(divRef.current, { cacheBust: true, pixelRatio: 4 });
      await toBlob(divRef.current, { cacheBust: true, pixelRatio: 4 });
      await toBlob(divRef.current, { cacheBust: true, pixelRatio: 4 });
      await toBlob(divRef.current, { cacheBust: true, pixelRatio: 4 });
      await toBlob(divRef.current, { cacheBust: true, pixelRatio: 4 });
      await toBlob(divRef.current, { cacheBust: true, pixelRatio: 4 });
      const blob = await toBlob(divRef.current, {
        cacheBust: true,
        pixelRatio: 4,
      });
      if (blob) {
        saveAs(blob, `toaster-boothd-${getFormatDate(new Date())}1.png`);
      } else {
        console.error('Blob 생성 실패');
      }
    } catch (error) {
      console.error('Error converting div to image:', error);
    }
  };

  return (
    <div className="flex flex-col items-end w-fit h-fit md:flex-row p-5 gap-5 bg-white rounded-2xl">
      {/* 사진 프레임 */}
      <div ref={divRef}>
        <PhotoFrame />
      </div>

      {/* 다운로드 버튼 */}
      <Button
        label="사진 다운로드 🔽"
        onClick={handleDownload}
        size="medium"
        color="pink"
      />
    </div>
  );
};

export default PhotoDownloadSection;

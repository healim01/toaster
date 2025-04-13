import { Button } from '@/components';
import { PhotoFrame } from '@/components/photo';
import { trackDownloadButton } from '@/service/amplitude/trackEvent';
import { getFormatDate } from '@/utils/getFormatDate';
import domtoimage from 'dom-to-image';
import saveAs from 'file-saver';
import { useRef } from 'react';

const PhotoDownloadSection = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    trackDownloadButton();
    if (!divRef.current) return;

    try {
      const div = divRef.current;
      const blob = await domtoimage.toBlob(div);
      saveAs(blob, `toaster-booth-${getFormatDate(new Date())}.png`);
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
      <Button label="사진 다운로드" onClick={handleDownload} />
    </div>
  );
};

export default PhotoDownloadSection;

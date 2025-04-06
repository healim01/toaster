import { Button } from '@/components';
import { PhotoFrame } from '@/components/photo';
import { getFormatDate } from '@/utils/getFormatDate';
import domtoimage from 'dom-to-image';
import saveAs from 'file-saver';
import { useRef } from 'react';

const SavePhotoPage = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
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
    <div className="flex justify-center items-center w-full h-full gap-10">
      <div className="flex flex-col items-end w-fit h-fit md:flex-row p-5 gap-5 bg-white rounded-2xl">
        <div ref={divRef}>
          <PhotoFrame />
        </div>
        <Button label="사진 다운로드" onClick={handleDownload} />
      </div>
    </div>
  );
};

export default SavePhotoPage;

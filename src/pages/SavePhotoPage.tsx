import { Button } from '@/components';
import { PhotoFrame } from '@/components/Photo';
import { ROUTE_PATH } from '@/constants/routePath';
import { usePhotosContext } from '@/hooks';
import domtoimage from 'dom-to-image';
import saveAs from 'file-saver';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SavePhotoPage = () => {
  const navigate = useNavigate();
  const { setPhotos } = usePhotosContext();

  const handleReturn = () => {
    setPhotos([]);
    navigate(ROUTE_PATH.takePhoto);
  };

  const divRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!divRef.current) return;

    try {
      const div = divRef.current;
      const blob = await domtoimage.toBlob(div);
      saveAs(blob, 'result.png');
    } catch (error) {
      console.error('Error converting div to image:', error);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center w-full gap-10 bg-amber-50">
      <Button label="home" onClick={handleReturn} />
      <Button label="다운로드" onClick={handleDownload} />
      <div ref={divRef}>
        <PhotoFrame />
      </div>
    </div>
  );
};

export default SavePhotoPage;

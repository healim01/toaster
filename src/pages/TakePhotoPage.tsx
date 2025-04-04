import { CameraSection } from '@/components/camera';
import { PreviewSection } from '@/components/preview';
import { ROUTE_PATH } from '@/constants/routePath';
import { usePhotosContext } from '@/hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TakePhotoPage = () => {
  const navigate = useNavigate();
  const { photos } = usePhotosContext();

  useEffect(() => {
    if (photos.length >= 4) navigate(ROUTE_PATH.customPhoto);
  }, [photos]);

  return (
    <div className="flex flex-row items-center justify-center w-full h-full gap-10 bg-amber-50">
      <CameraSection />

      <PreviewSection />
    </div>
  );
};

export default TakePhotoPage;

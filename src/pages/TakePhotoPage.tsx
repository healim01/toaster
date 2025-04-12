import { CameraSection } from '@/components/camera';
import { PreviewSection } from '@/components/preview';
import { ROUTE_PATH } from '@/constants/routePath';
import { usePhotosContext } from '@/hooks';
import { useTrackPageView } from '@/service/amplitude/useTrackPageView';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TakePhotoPage = () => {
  useTrackPageView({ eventName: '[View] 사진 촬영 페이지' });

  const navigate = useNavigate();
  const { photos } = usePhotosContext();

  useEffect(() => {
    if (photos.length >= 4) navigate(ROUTE_PATH.customPhoto);
  }, [photos]);

  return (
    <div className="flex flex-row flex-wrap items-center justify-center w-full h-full">
      <CameraSection />

      <PreviewSection />
    </div>
  );
};

export default TakePhotoPage;

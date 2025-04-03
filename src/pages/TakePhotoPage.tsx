import {
  CameraCapture,
  CameraFrame,
  FilterSelectSection,
} from '@/components/takePhoto';
import { ROUTE_PATH } from '@/constants/routePath';
import { usePhotosContext } from '@/hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TakePhotoPage = () => {
  const navigate = useNavigate();
  const { photos } = usePhotosContext();

  useEffect(() => {
    if (photos.length >= 4) navigate(ROUTE_PATH.preview);
  }, [photos]);

  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen gap-10 bg-amber-50">
      <div className="flex flex-col">
        <CameraCapture />
        <FilterSelectSection />
      </div>
      <CameraFrame />
    </div>
  );
};

export default TakePhotoPage;

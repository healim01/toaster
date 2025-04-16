import { CameraSection } from '@/components/camera';
import { PreviewSection } from '@/components/preview';
import { ROUTE_PATH } from '@/constants/routePath';
import { useEventNavigate, useIsMobileDevice, usePhotosContext } from '@/hooks';
import { TakePhotoMobilePage } from '@/pages';
import { useTrackPageView } from '@/service/amplitude';
import { useEffect } from 'react';

const TakePhotoPage = () => {
  useTrackPageView({ eventName: '[View] 사진 촬영 페이지' });

  const navigate = useEventNavigate();
  const { photos } = usePhotosContext();

  useEffect(() => {
    if (photos.length >= 4) navigate(ROUTE_PATH.customPhoto);
  }, [photos]);

  const isMobile = useIsMobileDevice();
  if (isMobile) return <TakePhotoMobilePage />;

  return (
    <div className="flex flex-row flex-wrap items-center justify-center w-full h-full">
      {/* 카메라 섹션 */}
      <CameraSection />

      {/* 프리뷰 사진 섹션 */}
      <PreviewSection />
    </div>
  );
};

export default TakePhotoPage;

import { MobileCameraSection } from '@/components/camera';
import MobilePreviewSection from '@/components/preview/MobilePreviewSection';

const TakePhotoMobilePage = () => {
  return (
    <div className="flex flex-col w-full h-full bg-pink-50 mt-[50px]">
      {/* 프리뷰 사진 섹션 */}
      <MobilePreviewSection />

      {/* 카메라 섹션 */}
      <MobileCameraSection />
    </div>
  );
};

export default TakePhotoMobilePage;

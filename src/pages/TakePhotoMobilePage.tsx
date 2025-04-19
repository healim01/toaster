import { ToastMessage } from '@/components';
import { MobileCameraSection } from '@/components/camera';
import { MobilePreviewSection } from '@/components/preview';

const TakePhotoMobilePage = () => {
  return (
    <div className="flex flex-col w-full h-full mt-[50px]">
      {/* 프리뷰 사진 섹션 */}
      <MobilePreviewSection />

      {/* 카메라 섹션 */}
      <MobileCameraSection />

      <ToastMessage message="기기의 오른쪽이 위로 가도록 촬영해주세요!" />
    </div>
  );
};

export default TakePhotoMobilePage;

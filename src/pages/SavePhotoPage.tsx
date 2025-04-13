import { BackToHomeSection, ComplimentDevSection } from '@/components/etc';
import { PhotoDownloadSection } from '@/components/photo';
import { useTrackPageView } from '@/service/amplitude';

const SavePhotoPage = () => {
  useTrackPageView({ eventName: '[View] 사진 저장 페이지' });

  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 mt-[60px] md:mt-[20px]">
      <div className="flex-shrink-0">
        <PhotoDownloadSection />
      </div>

      <div className="flex flex-col items-center justify-start gap-6 md:items-start">
        <ComplimentDevSection />
        <div className="hidden md:block">
          <BackToHomeSection />
        </div>
      </div>
    </div>
  );
};

export default SavePhotoPage;

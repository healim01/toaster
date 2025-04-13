import { BackToHomeSection, ComplimentDevSection } from '@/components/etc';
import { PhotoDownloadSection } from '@/components/photo';
import { useTrackPageView } from '@/service/amplitude';

const SavePhotoPage = () => {
  useTrackPageView({ eventName: '[View] 사진 저장 페이지' });

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <PhotoDownloadSection />
      </div>

      <div className="absolute top-1/2 left-1/2 translate-x-[250px] -translate-y-1/2 flex flex-col h-full justify-around gap-6">
        <ComplimentDevSection />
        <BackToHomeSection />
      </div>
    </div>
  );
};

export default SavePhotoPage;

import { FloatingButton } from '@/components';
import { FilterSelectSection } from '@/components/filter';
import { FrameSelectSection } from '@/components/frame';
import { PhotoFrame } from '@/components/photo';
import { ROUTE_PATH } from '@/constants/routePath';
import { useEventNavigate } from '@/hooks';
import { useTrackPageView } from '@/service/amplitude/';

const CustomPhotoPage = () => {
  useTrackPageView({ eventName: '[View] 사진 커스텀 페이지' });

  const navigate = useEventNavigate();

  const handleComplete = () => {
    navigate(ROUTE_PATH.savePhoto);
  };

  return (
    <div className="flex relative w-full md:h-[92vh] pt-2 pb-2">
      <div className="flex flex-col  md:flex-row gap-4 w-full h-full mt-[50px]">
        {/* 사진 영역 */}
        <div className="flex items-center justify-center w-full md:w-[280px] h-full bg-gray-50 p-4 rounded-lg shadow-md">
          <PhotoFrame />
        </div>

        {/* 필터 & 프레임 선택 영역 */}
        <div className="flex flex-col h-full gap-4 flex-1">
          <FilterSelectSection />
          <FrameSelectSection />
        </div>
      </div>

      {/* 플로팅 버튼 */}
      <FloatingButton
        label="사진 편집 완료"
        onClick={handleComplete}
        variant="contained"
        color="pink"
        size="medium"
        round
      />
    </div>
  );
};

export default CustomPhotoPage;

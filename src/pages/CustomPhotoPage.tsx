import { Button } from '@/components';
import { FilterSelectSection } from '@/components/filter';
import { FrameSelectSection } from '@/components/frame';
import { PhotoFrame } from '@/components/photo';
import { ROUTE_PATH } from '@/constants/routePath';
import { useNavigate } from 'react-router-dom';

const CustomPhotoPage = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate(ROUTE_PATH.savePhoto);
  };

  return (
    <div className="flex flex-row w-full h-full p-3 gap-3">
      <Button label="뒤로가기" onClick={() => navigate(ROUTE_PATH.takePhoto)} />
      <div className="flex p-3 bg-white rounded-lg shadow-md">
        <PhotoFrame />
      </div>

      <div className="flex flex-col flex-1 gap-3">
        <FilterSelectSection />
        <FrameSelectSection />
      </div>

      <Button label="완료" onClick={handleComplete} />
    </div>
  );
};

export default CustomPhotoPage;

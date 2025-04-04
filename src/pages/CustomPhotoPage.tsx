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
    <div className="flex flex-row items-center justify-center w-full h-full gap-10 bg-amber-50">
      <div className="flex flex-col items-center gap-3 p-3">
        <PhotoFrame />
      </div>
      <FilterSelectSection />
      <FrameSelectSection />
      <Button label="완료" onClick={handleComplete} />
    </div>
  );
};

export default CustomPhotoPage;

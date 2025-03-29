import { Button } from '@/components';
import { FrameSelectSection, PreviewFrame } from '@/components/preview';
import { ROUTE_PATH } from '@/constants/routePath';
import { usePhotosContext } from '@/hooks';
import { useNavigate } from 'react-router-dom';

const PreviewPage = () => {
  const navigate = useNavigate();
  const { setPhotos } = usePhotosContext();

  const handleReturn = () => {
    setPhotos([]);
    navigate(ROUTE_PATH.home);
  };

  const handleComplete = () => {
    navigate(ROUTE_PATH.save);
  };

  return (
    <div className="flex flex-row items-center justify-center w-full gap-10 bg-amber-50">
      <Button label="home" onClick={handleReturn} />
      <PreviewFrame />
      <FrameSelectSection />
      <Button label="완료" onClick={handleComplete} />
    </div>
  );
};

export default PreviewPage;

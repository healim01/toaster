import { Button } from '@/components';
import { FrameSelectSection, PhotoFrame } from '@/components/preview';
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

  return (
    <div className="flex flex-row items-center justify-center w-full gap-10 bg-amber-50">
      <Button label="home" onClick={handleReturn} />
      <PhotoFrame />
      <FrameSelectSection />
    </div>
  );
};

export default PreviewPage;

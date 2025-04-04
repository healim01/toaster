import { Button } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { usePhotosContext } from '@/hooks';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { setPhotos } = usePhotosContext();

  const handleReturn = () => {
    setPhotos([]);
    navigate(ROUTE_PATH.takePhoto);
  };

  return (
    <div className="sticky top-0 flex items-center justify-center h-[60px] w-full z-10">
      <div className="flex items-center w-5xl h-full bg-amber-200">
        <Button label="toaster" onClick={handleReturn} />
      </div>
    </div>
  );
};

export default Header;

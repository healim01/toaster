import { Button } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { HeaderSize } from '@/constants/system';
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
    <div
      className={`sticky top-0 flex items-center w-full h-[${HeaderSize}px] bg-amber-200 z-10 shrink-0`}
    >
      <Button label="toaster" onClick={handleReturn} />
    </div>
  );
};

export default Header;

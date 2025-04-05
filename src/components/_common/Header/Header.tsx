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
      className={`sticky top-0 flex items-center w-full h-[${HeaderSize}px] bg-white z-10 shrink-0`}
    >
      <div className="flex flex-row w-full h-full max-w-screen-xl px-4 sm:px-6 md:px-8 mx-auto">
        <Button label="toaster" onClick={handleReturn} />
      </div>
    </div>
  );
};

export default Header;

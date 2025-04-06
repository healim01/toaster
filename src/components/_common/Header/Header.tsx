import { TextToasterIcon } from '@/assets';
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
    <div
      className={`fixed top-0 flex items-center w-full h-[45px] z-10 shrink-0`}
    >
      <div className="flex flex-row items-center w-full h-full max-w-screen-xl px-4 sm:px-6 md:px-8 mx-auto">
        <TextToasterIcon width={150} height={40} onClick={handleReturn} />
      </div>
    </div>
  );
};

export default Header;

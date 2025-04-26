import { TextToasterIcon } from '@/assets';
import { AuthSection } from '@/components/Login';
import { ROUTE_PATH } from '@/constants/routePath';
import { useEventNavigate, usePhotosContext } from '@/hooks';
import { useEffect, useState } from 'react';

const Header = () => {
  const navigate = useEventNavigate();
  const { setPhotos } = usePhotosContext();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleReturn = () => {
    setPhotos([]);
    navigate(ROUTE_PATH.takePhoto);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 flex items-center w-full h-[55px] z-50 shrink-0 transition-colors duration-300 
      bg-yellow-50         
      ${isScrolled ? 'md:bg-yellow-50 md:shadow-sm' : 'md:bg-transparent'}
    `}
    >
      <div className="flex flex-row justify-between items-center w-full h-full md:max-w-3/4 mx-auto">
        <TextToasterIcon width={150} height={40} onClick={handleReturn} />

        <AuthSection />
      </div>
    </div>
  );
};

export default Header;

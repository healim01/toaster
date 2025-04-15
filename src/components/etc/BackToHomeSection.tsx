import { arrowToastImg } from '@/assets';
import { ROUTE_PATH } from '@/constants/routePath';
import { useEventNavigate, usePhotosContext } from '@/hooks';

const BackToHomeSection = () => {
  const { setPhotos } = usePhotosContext();
  const navigate = useEventNavigate();

  const handleClickHome = () => {
    setPhotos([]);
    navigate(ROUTE_PATH.start);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="flex items-center gap-2 text-blue-500 font-semibold text-2xl hover:text-blue-600 hover:scale-105 transition-all duration-300 bg-transparent"
        onClick={handleClickHome}
      >
        홈으로 돌아가기
        <img src={arrowToastImg} alt="home" className="w-20" />
      </button>
    </div>
  );
};

export default BackToHomeSection;

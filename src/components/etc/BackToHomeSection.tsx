import { arrowToastImg } from '@/assets';
import { ROUTE_PATH } from '@/constants/routePath';
import { useEventNavigate } from '@/hooks';
import { clearPhotos } from '@/utils/photoStorage';

const BackToHomeSection = () => {
  const navigate = useEventNavigate();

  const handleClickHome = () => {
    navigate(ROUTE_PATH.start);
    clearPhotos();
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="flex items-center gap-2 text-blue-500 font-semibold text-2xl hover:text-blue-600 hover:scale-105 transition-all duration-300 bg-transparent"
        onClick={handleClickHome}
      >
        홈으로 돌아가기
        <img src={arrowToastImg} alt="home icon" className="w-50 h-50" />
      </button>
    </div>
  );
};

export default BackToHomeSection;

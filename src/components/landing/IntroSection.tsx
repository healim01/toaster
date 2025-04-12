import { toasterBoothImg } from '@/assets';
import { Button } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useEventNavigate } from '@/hooks';

const IntroSection = () => {
  const navigate = useEventNavigate();

  return (
    <div className="flex flex-col justify-center md:w-1/3 min-h-[500px] p-4">
      <img src={toasterBoothImg} className="w-1/2" />

      <p className="text-3xl font-bold text-amber-800 mt-4 mb-2">
        오늘의 기분, 오늘의 토스트 🌞
      </p>
      <p className="text-2xl text-amber-800 mb-8">
        마음에 드는 재료를 골라, 나만의 토스트를 만들어보세요!
        <br />
        귀여운 네컷 사진으로 추억을 담아요 📸
      </p>

      <Button
        label="Let's Toast! 📷 "
        onClick={() => navigate(ROUTE_PATH.takePhoto)}
        size="large"
        round
      />
    </div>
  );
};

export default IntroSection;

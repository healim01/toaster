import { toastImg } from '@/assets';
import { frame } from '@/assets/frames';
import {
  blueberryJamImg,
  blueberryJamOpenImg,
  peachJamImg,
  peachJamOpenImg,
  peanutButterJamImg,
  peanutButterJamOpenImg,
  strawberryJamImg,
  strawberryJamOpenImg,
} from '@/assets/imgs';
import { Button, Marquee } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-around items-center w-full h-screen gap-10">
      <div className="flex flex-col">
        <h1 className="text-5xl font-extrabold text-brown-900 mb-2 drop-shadow-sm tracking-wide">
          Toaster
          <br />
          Booth
        </h1>

        <p className="text-xl text-brown-700 mb-8">
          나만의 토스트를 만들고 사진으로 남겨보세요
        </p>
        <Button
          label="📷 찍으러 가기!"
          onClick={() => navigate(ROUTE_PATH.takePhoto)}
          size="large"
          round
        />
      </div>
      <div>
        <img src={frame} className="w-[200px]" />
      </div>

      <div className="absolute bottom-15 w-full">
        <Marquee
          height={80}
          marqueeItem={[
            toastImg,
            strawberryJamImg,
            strawberryJamOpenImg,
            peanutButterJamImg,
            peanutButterJamOpenImg,
            blueberryJamImg,
            blueberryJamOpenImg,
            peachJamImg,
            peachJamOpenImg,
          ]}
        />
      </div>
    </div>
  );
};

export default StartPage;

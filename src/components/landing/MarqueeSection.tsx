import {
  avocadoToastImg,
  blueberryJamImg,
  blueberryJamOpenImg,
  blueberryToastImg,
  eggToastImg,
  peachJamImg,
  peachJamOpenImg,
  peanutButterJamImg,
  peanutButterJamOpenImg,
  strawberryJamImg,
  strawberryJamOpenImg,
  strawberryToastImg,
} from '@/assets';
import { Marquee } from '@/components';

const MarqueeSection = () => {
  return (
    <div className="fixed bottom-0 md:absolute md:bottom-10 w-full bg-blue-50 md:bg-transparent p-2">
      <Marquee
        height={50}
        marqueeItem={[
          eggToastImg,
          blueberryToastImg,
          strawberryToastImg,
          avocadoToastImg,
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
  );
};

export default MarqueeSection;

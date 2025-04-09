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
    <div className="fixed bottom-10 md:absolute md:bottom-30 w-full">
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

import { ToastFrameCut } from '@/components/preview';
import { usePhotosContext } from '@/hooks';

const breadHeight = 200;
const breadGap = 25;

const positions = [
  { top: '0' },
  { top: `${breadHeight - breadGap}px` },
  { top: `${(breadHeight - breadGap) * 2}px` },
  { top: `${(breadHeight - breadGap) * 3}px` },
];

const rotates = [
  { transform: `rotate(9deg)` },
  { transform: `rotate(0deg)` },
  { transform: `rotate(-12deg)` },
  { transform: `rotate(0deg)` },
];

const ToastFrame = () => {
  const { photos } = usePhotosContext();

  return (
    <div className="relative h-[730px] w-[250px]">
      {Array.from({ length: 4 }).map((_, index) => {
        return (
          <div
            key={index}
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{ ...positions[index], ...rotates[index] }}
          >
            <ToastFrameCut photo={photos[index]} />
          </div>
        );
      })}
    </div>
  );
};

export default ToastFrame;

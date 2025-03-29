import ToastFrame from '@/components/takePhoto/ToastFrame';
import { useFilterContext, usePhotosContext } from '@/hooks';

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

const CameraFrame = () => {
  const { photos } = usePhotosContext();
  const { filter } = useFilterContext();

  return (
    <div className="h-full w-[300px] flex flex-col justify-center items-center">
      <div className="relative h-[730px] w-[250px]">
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <div
              key={index}
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{ ...positions[index], ...rotates[index] }}
            >
              <ToastFrame photo={photos[index]} filter={filter} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CameraFrame;

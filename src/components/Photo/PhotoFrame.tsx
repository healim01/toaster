import { frames } from '@/constants/frames';
import { useFilterContext, useFrameContext, usePhotosContext } from '@/hooks';
import { getFormatDate } from '@/utils/getFormatDate';

const positions = [
  { top: '12.5px', left: '12.5px' },
  { top: '175px', left: '12.5px' },
  { top: '337.5px', left: '12.5px' },
  { top: '500px', left: '12.5px' },
];

const PhotoFrame = () => {
  const { photos } = usePhotosContext();
  const { filter } = useFilterContext();
  const { frame } = useFrameContext();

  return (
    <div className="relative h-[750px] w-[250px]">
      <img
        src={frames[frame]}
        alt="Photo Frame"
        className="absolute top-0 left-0 w-full h-full z-100"
      />
      {photos?.map((photo, index) => {
        return (
          <img
            src={photo}
            key={`Captured-${photo}`}
            alt={`Captured-${photo}`}
            className={`absolute ${filter} transform -scale-x-100 z-20`}
            style={{
              filter: filter,
              ...positions[index],
            }}
            width="225"
            height="150"
          />
        );
      })}
      <div className={`absolute bottom-1 right-2 z-100`}>
        {getFormatDate(new Date())}
      </div>
    </div>
  );
};

export default PhotoFrame;

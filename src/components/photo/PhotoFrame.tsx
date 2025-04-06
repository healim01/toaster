import { frames } from '@/constants/frames';
import { useFilterContext, useFrameContext, usePhotosContext } from '@/hooks';

const photoSize = {
  width: 450,
  height: 253,
};

const gap = 25;
const positions = [
  { top: gap / 2, left: gap / 2 },
  { top: gap + photoSize.height / 2, left: gap / 2 },
  { top: (gap / 2) * 3 + (photoSize.height / 2) * 2, left: gap / 2 },
  { top: (gap / 2) * 4 + (photoSize.height / 2) * 3, left: gap / 2 },
];

const PhotoFrame = () => {
  const { photos } = usePhotosContext();
  const { filter } = useFilterContext();
  const { frame } = useFrameContext();

  return (
    <div className={`relative w-[250px] h-[675px] shrink-0`}>
      <img
        src={frames[frame]}
        alt="Photo Frame"
        className="absolute top-0 left-0 w-full h-full z-10"
      />
      {photos?.map((photo, index) => {
        return (
          <img
            src={photo}
            key={`Captured-${photo}`}
            alt={`Captured-${photo}`}
            className={`absolute transform -scale-x-100 z-0`}
            style={{
              filter: filter?.filterStyle ?? 'none',
              ...positions[index],
            }}
            width="225"
            height="127"
          />
        );
      })}
    </div>
  );
};

export default PhotoFrame;

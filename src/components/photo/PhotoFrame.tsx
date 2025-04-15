import { useFilterContext, useFrameContext, usePhotosContext } from '@/hooks';
import useFrames from '@/hooks/useFrames';

const photoSize = {
  width: 450,
  height: 253,
};
const gap = Math.floor(25 / 2);
const positions = [
  { top: gap, left: gap },
  { top: gap * 2 + photoSize.height / 2, left: gap },
  { top: gap * 3 + (photoSize.height / 2) * 2, left: gap },
  { top: gap * 4 + (photoSize.height / 2) * 3, left: gap },
];

const PhotoFrame = () => {
  const { photos } = usePhotosContext();
  const { filter } = useFilterContext();
  const { frames } = useFrames();
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
            width="230"
            height="130"
          />
        );
      })}
    </div>
  );
};

export default PhotoFrame;

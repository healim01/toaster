import { Filter } from '@/constants/filter';
import { ROUTE_PATH } from '@/constants/routePath';
import { useFilterContext, usePhotosContext } from '@/hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const positions = [
  { top: '12.5px', left: '12.5px' },
  { top: '175px', left: '12.5px' },
  { top: '337.5px', left: '12.5px' },
  { top: '500px', left: '12.5px' },
];

const CameraFrame = () => {
  const navigate = useNavigate();
  const { photos } = usePhotosContext();
  const { filter } = useFilterContext();

  useEffect(() => {
    if (photos.length === 4) navigate(ROUTE_PATH.preview);
  }, [photos]);

  return (
    <div className="flex flex-col items-center gap-3 p-3">
      <div className="relative h-[750px] w-[250px]">
        {photos?.map((photo, index) => {
          return (
            <img
              src={photo}
              key={`Captured-${photo}`}
              alt={`Captured-${photo}`}
              className={`absolute transform -scale-x-100 z-20`}
              style={{
                filter: Filter[filter],
                ...positions[index],
              }}
              width="225"
              height="150"
            />
          );
        })}
      </div>
    </div>
  );
};

export default CameraFrame;

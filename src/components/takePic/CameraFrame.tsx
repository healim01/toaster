import { useFilterContext, usePhotosContext } from '@/hooks';

const CameraFrame = () => {
  const { photos } = usePhotosContext();
  const { filter } = useFilterContext();

  return (
    <div className="flex flex-col items-center gap-3 bg-slate-300 p-3">
      {photos?.map(photo => (
        <img
          src={photo}
          key={`Captured-${photo}`}
          alt={`Captured-${photo}`}
          width="300"
          style={{
            filter: filter,
            transform: 'scaleX(-1)',
            aspectRatio: '3 / 2',
            objectFit: 'cover',
            objectPosition: '50% 50%',
          }}
        />
      ))}
    </div>
  );
};

export default CameraFrame;

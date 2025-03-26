import { useFilterContext, usePhotosContext } from '@/hooks';

const CameraFrame = () => {
  const { photos } = usePhotosContext();
  const { filter } = useFilterContext();

  return (
    <div className="flex flex-col items-center gap-2 bg-slate-300 p-5">
      {photos?.map(photo => (
        <img
          src={photo}
          key={`Captured-${photo}`}
          alt={`Captured-${photo}`}
          width="360"
          height="240"
          style={{
            filter: filter,
          }}
        />
      ))}
    </div>
  );
};

export default CameraFrame;

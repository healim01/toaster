import { usePhotosContext } from '@/hooks';

const MobilePreviewSection = () => {
  const { photos } = usePhotosContext();

  return (
    <section className="flex justify-center items-center overflow-x-auto w-full h-[150px] bg-amber-800">
      <div className="w-[150px] h-[90dvw] rotate-90 bg-blue-50 flex flex-col items-center justify-center gap-4 px-4">
        {Array.from({ length: 4 }).map((_, index) => {
          const photo = photos[index];
          return photo ? (
            <img
              key={index}
              src={photo}
              alt={`photo-${index}`}
              className="w-[120px] rounded-lg shadow-md object-contain scale-x-[-1]"
            />
          ) : (
            <div
              key={index}
              className="w-[120px] h-[160px] bg-white rounded-lg shadow-inner border border-gray-300"
            />
          );
        })}
      </div>
    </section>
  );
};

export default MobilePreviewSection;

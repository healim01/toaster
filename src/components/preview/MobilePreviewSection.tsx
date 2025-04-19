import { toastImg } from '@/assets';
import { usePhotosContext } from '@/hooks';

const breadHeight = 100;
const breadGap = 20;

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

const MobilePreviewSection = () => {
  const { photos } = usePhotosContext();

  return (
    <section className="flex justify-center items-center w-full h-[120px]">
      <div className="rotate-90 w-[120px] h-[320px] flex flex-col items-center justify-center">
        {Array.from({ length: 4 }).map((_, index) => {
          const photo = photos[index];
          return (
            <div
              key={index}
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{ ...positions[index], ...rotates[index] }}
            >
              <div className="relative w-[110px]">
                <img src={toastImg} width={130} />
                {photo && (
                  <div className="w-[85px] aspect-[16/9] absolute bottom-4 left-4 transform scale-x-[-1] z-10">
                    <img
                      src={photo}
                      key={`Captured-${photo}`}
                      alt={`Captured-${photo}`}
                      className={`object-cover rounded-md`}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MobilePreviewSection;

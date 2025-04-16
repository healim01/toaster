import { FrameButton, FrameSkeleton } from '@/components/frame';
import { useGetFramesByEventQuery } from '@/hooks/queries';
import { useEffect, useState } from 'react';

const FrameSelectSection = () => {
  const { frames, isLoading } = useGetFramesByEventQuery();

  const [imageLoaded, setImageLoaded] = useState<boolean[]>(
    new Array(frames.length).fill(false),
  );

  useEffect(() => {
    setImageLoaded(new Array(frames.length).fill(false));
  }, [frames.length]);

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  const skeletons = new Array(8).fill(null);

  return (
    <section className="flex flex-col w-full h-fit md:h-[85%] p-5 bg-gray-50 rounded-lg md:overflow-y-scroll shadow-md">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full justify-center justify-items-center mb-4">
        {isLoading
          ? skeletons.map((_, index) => <FrameSkeleton key={index} />)
          : frames.map((frame, index) => (
              <div key={frame.name}>
                {!imageLoaded[index] && <FrameSkeleton key={index} />}

                <FrameButton
                  frame={frame}
                  imageLoaded={imageLoaded[index]}
                  onImageLoad={() => handleImageLoad(index)}
                />
              </div>
            ))}
      </div>
    </section>
  );
};

export default FrameSelectSection;

import { FrameButton } from '@/components/frame';
import useFrames from '@/hooks/useFrames';

const FrameSelectSection = () => {
  const { frames } = useFrames();

  return (
    <section className="flex flex-col w-full h-fit md:h-[85%] p-5 bg-gray-50 rounded-lg md:overflow-y-scroll shadow-md">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full justify-center justify-items-center mb-4">
        {Object.entries(frames).map(([name, url]) => (
          <FrameButton key={name} frameName={name} frameUrl={url} />
        ))}
      </div>
    </section>
  );
};

export default FrameSelectSection;

import FrameButton from '@/components/frame/FrameButton';
import { frames } from '@/constants/frames';

const FrameSelectSection = () => {
  return (
    <section className="flex w-full h-[85%] p-5 bg-gray-100 rounded-lg overflow-y-scroll shadow-md">
      <div className="grid grid-cols-4 gap-4 w-full justify-center mb-4">
        {Object.entries(frames).map(([name, url]) => (
          <FrameButton key={name} frameName={name} frameUrl={url} />
        ))}
      </div>
    </section>
  );
};

export default FrameSelectSection;

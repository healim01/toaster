import { FrameButton } from '@/components/frame';
import { useGetFramesByEventQuery } from '@/hooks/queries';

const FrameSelectSection = () => {
  const { frames, isLoading } = useGetFramesByEventQuery();

  return (
    <section className="flex flex-col w-full h-fit md:h-[85%] p-5 bg-gray-50 rounded-lg md:overflow-y-scroll shadow-md">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full justify-center justify-items-center mb-4">
        {frames.frames.map(frame => (
          <FrameButton key={frame.name} frame={frame} />
        ))}
      </div>
    </section>
  );
};

export default FrameSelectSection;

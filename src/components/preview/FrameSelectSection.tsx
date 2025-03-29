import { Button } from '@/components';
import { frames } from '@/constants/frames';
import { useFrameContext } from '@/hooks';

const FrameSelectSection = () => {
  const { setFrame } = useFrameContext();

  return (
    <section className="flex flex-wrap gap-4 p-4 bg-gray-100 rounded-lg">
      {Object.entries(frames).map(([key]) => (
        <Button
          key={key}
          label={key}
          onClick={() => setFrame(key)}
          size="medium"
        />
      ))}
    </section>
  );
};

export default FrameSelectSection;

import frames from '@/constants/frames';
import useFrameContext from '@/hooks/useFrameContext';

const FrameSelectSection = () => {
  const { setFrame } = useFrameContext();

  return (
    <section>
      {Object.entries(frames).map(([key, value]) => (
        <button key={key} onClick={() => setFrame(value)}>
          {key}
        </button>
      ))}
    </section>
  );
};

export default FrameSelectSection;

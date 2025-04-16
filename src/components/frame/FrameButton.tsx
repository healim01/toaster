import { useFrameContext } from '@/hooks';
import { trackFrameButton } from '@/service/amplitude/trackEvent';
import { Frame } from '@/types/frame';

interface Props {
  frame: Frame;
}

const FrameButton = ({ frame }: Props) => {
  const { frame: selectedFrame, setFrame } = useFrameContext();
  const isSelected = frame.name === selectedFrame;

  const handleSelectFrame = () => {
    trackFrameButton(frame.name);
    setFrame(frame.name);
  };

  return (
    <div
      onClick={handleSelectFrame}
      className={`flex flex-col items-center justify-center p-4 gap-2 w-[150px] cursor-pointer rounded-2xl border transition-all',
       ${
         isSelected
           ? 'border-blue-500 bg-blue-100 shadow-md'
           : 'border-gray-300 bg-white hover:bg-blue-50 hover:shadow-sm'
       }
      )}`}
    >
      <img src={frame.url} width={100} />
      <div>{frame.name}</div>
    </div>
  );
};

export default FrameButton;

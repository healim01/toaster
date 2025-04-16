import { useFrameContext } from '@/hooks';
import { trackFrameButton } from '@/service/amplitude/trackEvent';
import { Frame } from '@/types/frame';

interface Props {
  frame: Frame;
  imageLoaded: boolean;
  onImageLoad: () => void;
}

const FrameButton = ({ frame, imageLoaded, onImageLoad }: Props) => {
  const { frame: selectedFrame, setFrame } = useFrameContext();
  const isSelected = frame.name === selectedFrame;

  const handleSelectFrame = () => {
    trackFrameButton(frame.name);
    setFrame(frame.name);
  };

  return (
    <div
      onClick={handleSelectFrame}
      className={`flex-col items-center justify-center p-4 gap-2 w-[150px] h-[330px] cursor-pointer rounded-2xl border transition-all',
          ${imageLoaded ? 'flex' : 'hidden'}
       ${
         isSelected
           ? 'border-blue-500 bg-blue-100 shadow-md'
           : 'border-gray-300 bg-white hover:bg-blue-50 hover:shadow-sm'
       }
      )}`}
    >
      <img src={frame.url} alt={frame.name} width={100} onLoad={onImageLoad} />
      <div>{frame.name}</div>
    </div>
  );
};

export default FrameButton;

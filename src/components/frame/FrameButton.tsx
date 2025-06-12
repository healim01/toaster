import { newFrameTagImg } from '@/assets';
import { useFrameContext } from '@/hooks';
import { trackFrameButton } from '@/service/amplitude/trackEvent';
import { Frame } from '@/types/frame';
import { getCurrentMonthTag } from '@/utils/getCurrentMonthTag';

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

  const isNewFrame = (tags: string[]) => {
    const currentMonthTag = getCurrentMonthTag();
    return tags.includes(currentMonthTag);
  };

  return (
    <div
      onClick={handleSelectFrame}
      className={`relative flex-col items-center justify-center p-4 gap-2 w-[150px] h-[330px] cursor-pointer rounded-2xl border transition-all
    ${imageLoaded ? 'flex' : 'hidden'}
    ${
      isSelected
        ? 'border-blue-500 bg-blue-100 shadow-md'
        : 'border-gray-300 bg-white hover:bg-blue-50 hover:shadow-sm'
    }`}
    >
      {isNewFrame(frame.tags) && (
        <img
          src={newFrameTagImg}
          width={60}
          className="absolute top-0 left-0 transform -translate-x-1/3 -translate-y-1/3"
          alt="new"
        />
      )}
      <img src={frame.url} alt={frame.name} width={100} onLoad={onImageLoad} />
      <div>{frame.name}</div>
    </div>
  );
};

export default FrameButton;

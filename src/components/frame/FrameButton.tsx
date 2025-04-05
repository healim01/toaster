import { useFrameContext } from '@/hooks';

interface Props {
  frameName: string;
  frameUrl: string;
}

const FrameButton = ({ frameName, frameUrl }: Props) => {
  const { setFrame, frame } = useFrameContext();
  const isSelected = frame === frameName;

  return (
    <div
      onClick={() => setFrame(frameName)}
      className={`flex flex-col items-center justify-center p-4 gap-2 w-[150px] cursor-pointer rounded-2xl border transition-all',
       ${
         isSelected
           ? 'border-blue-500 bg-blue-100 shadow-md'
           : 'border-gray-300 bg-white hover:bg-blue-50 hover:shadow-sm'
       }
      )}`}
    >
      <img src={frameUrl} width={100} />
      <div>{frameName}</div>
    </div>
  );
};

export default FrameButton;

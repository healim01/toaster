import { useFrameContext } from '@/hooks';
import { useGetFramesByEventQuery } from '@/hooks/queries';

const useGetFrame = () => {
  const { frames, isLoading: isListLoading } = useGetFramesByEventQuery();
  const { frame: selectedFrameName } = useFrameContext();

  const selectedFrame = frames.find(f => f.name === selectedFrameName);

  return { selectedFrame, isListLoading };
};

export default useGetFrame;

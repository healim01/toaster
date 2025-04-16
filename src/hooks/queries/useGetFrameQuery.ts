import useFrameContext from '@/hooks/useFrameContext';
import { getFrame } from '@/service/supabase';
import { useQuery } from '@tanstack/react-query';

const useGetFrameQuery = () => {
  const { frame: selectedFrameName } = useFrameContext();

  const {
    data: frame,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['frame', selectedFrameName],
    queryFn: () => getFrame(selectedFrameName),
    enabled: !!selectedFrameName,
  });

  return { frame, isLoading, isError };
};

export default useGetFrameQuery;

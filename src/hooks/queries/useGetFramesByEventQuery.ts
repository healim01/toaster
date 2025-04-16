import { DEFAULT_FRAMES_TAGS } from '@/constants/framesTag';
import { getFrames } from '@/service/supabase';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';

const useGetFramesByEventQuery = () => {
  const query = new URLSearchParams(useLocation().search);
  const eventId = query.get('eventId') ?? undefined;

  const {
    data: frames = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['frames', eventId],
    queryFn: () => {
      const tags = [...DEFAULT_FRAMES_TAGS, ...(eventId ? [eventId] : [])];
      return getFrames(tags);
    },
    enabled: true,
    staleTime: 1000 * 60,
  });

  return { frames, isLoading, isError };
};

export default useGetFramesByEventQuery;

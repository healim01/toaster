import useGetFramesByEvent from '@/hooks/useGetFramesByEvent';
import { useLocation } from 'react-router-dom';

const useFrames = () => {
  const query = new URLSearchParams(useLocation().search);
  const eventId = query.get('eventId') ?? undefined;

  const frames = useGetFramesByEvent(eventId);

  return { frames };
};

export default useFrames;

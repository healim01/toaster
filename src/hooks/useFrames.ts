import { getFramesByEvent } from '@/constants/frames';
import { useLocation } from 'react-router-dom';

const useFrames = () => {
  const query = new URLSearchParams(useLocation().search);
  const eventId = query.get('eventId') ?? undefined;

  const frames = getFramesByEvent(eventId);

  return { frames };
};

export default useFrames;

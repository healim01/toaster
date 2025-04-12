import { getFramesByEvent } from '@/constants/frames';
import { useLocation } from 'react-router-dom';

const useFrames = () => {
  const query = new URLSearchParams(useLocation().search);
  const event = query.get('event') ?? undefined;

  const frames = getFramesByEvent(event);

  return { frames };
};

export default useFrames;

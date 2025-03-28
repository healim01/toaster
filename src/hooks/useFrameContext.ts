import { FrameContext } from '@/context';
import { useContext } from 'react';

const useFrameContext = () => {
  const state = useContext(FrameContext);
  if (!state) throw new Error('FrameProvider not found');

  const { frame, setFrame } = state;
  return { frame, setFrame };
};

export default useFrameContext;

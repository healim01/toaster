import { useFrameContext } from '@/hooks';
import { getFrame } from '@/service/supabase';
import { Frame } from '@/types/frame';
import { useEffect, useState } from 'react';

const useGetFrame = () => {
  const { frame } = useFrameContext();
  const [selectedFrame, setSelectedFrames] = useState<Frame>();

  useEffect(() => {
    const getData = async () => {
      const data = await getFrame(frame);
      setSelectedFrames(data);
    };

    getData();
  }, [frame]);

  return { selectedFrame };
};

export default useGetFrame;

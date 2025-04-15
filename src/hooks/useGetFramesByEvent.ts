import { DEFAULT_FRAMES_TAGS } from '@/constants/framesTag';
import { getFrames } from '@/service/supabase';
import { useEffect, useState } from 'react';

type Frame = {
  id: string;
  name: string;
  url: string;
  tags: string[];
};

const useGetFramesByEvent = (event?: string) => {
  const [frames, setFrames] = useState<Frame[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getFrames([...DEFAULT_FRAMES_TAGS, event ?? '']);
      setFrames(data);
    };

    getData();
  }, [event]);

  return { frames };
};

export default useGetFramesByEvent;

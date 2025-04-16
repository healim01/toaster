import { DEFAULT_FRAMES_TAGS } from '@/constants/framesTag';
import { getFrames } from '@/service/supabase';
import { Frame } from '@/types/frame';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useGetFramesByEvent = () => {
  const [frames, setFrames] = useState<Frame[]>([]);

  const query = new URLSearchParams(useLocation().search);
  const eventId = query.get('eventId') ?? undefined;

  useEffect(() => {
    const getData = async () => {
      const data = await getFrames([
        ...DEFAULT_FRAMES_TAGS,
        ...(eventId ? [eventId] : []),
      ]);
      setFrames(data);
    };

    getData();
  }, [eventId]);

  return { frames };
};

export default useGetFramesByEvent;

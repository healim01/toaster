import { PRIORITY_FRAMES_TAGS } from '@/constants/framesTag';
import { getStoragePublicUrl, supabaseClient } from '@/service/supabase';

export const getFrames = async (tags: string[]) => {
  const { data, error } = await supabaseClient
    .from('frames')
    .select('*')
    .overlaps('tags', tags)
    .eq('is_active', true)
    .order('created_at', { ascending: true });

  if (error) throw error;

  return data
    .map(frame => {
      const index = PRIORITY_FRAMES_TAGS.findIndex(priorityTag =>
        frame.tags.includes(priorityTag),
      );
      return {
        ...frame,
        url: getStoragePublicUrl(frame.image_path),
        _priorityIndex: index === -1 ? Infinity : index,
      };
    })
    .sort((a, b) => a._priorityIndex - b._priorityIndex);
};

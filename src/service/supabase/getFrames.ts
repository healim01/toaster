import { PRIORITY_FRAMES_TAGS } from '@/constants/framesTag';
import { getStoragePublicUrl, supabaseClient } from '@/service/supabase';
import { getCurrentMonthTag } from '@/utils/getCurrentMonthTag';

export const getFrames = async (tags: string[]) => {
  const currentMonthTag = getCurrentMonthTag();
  const framePriorityTags = [currentMonthTag, ...PRIORITY_FRAMES_TAGS];

  const { data, error } = await supabaseClient
    .from('frames')
    .select('*')
    .overlaps('tags', tags)
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (error) throw error;

  return data
    .map(frame => {
      const index = framePriorityTags.findIndex(priorityTag =>
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

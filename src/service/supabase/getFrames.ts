import { getStoragePublicUrl, supabaseClient } from '@/service/supabase';

const getFrames = async (tags: string[]) => {
  const { data, error } = await supabaseClient
    .from('frames')
    .select('*')
    .overlaps('tags', tags)
    .eq('is_active', true);

  if (error) throw error;

  return data.map(frame => ({
    ...frame,
    url: getStoragePublicUrl(frame.image_path),
  }));
};

export default getFrames;

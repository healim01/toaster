import { getStoragePublicUrl, supabaseClient } from '@/service/supabase';
import { Frame } from '@/types/frame';

const getFrame = async (name: string): Promise<Frame> => {
  const { data, error } = await supabaseClient
    .from('frames')
    .select('*')
    .eq('name', name)
    .eq('is_active', true)
    .single();

  if (error) throw error;

  return {
    ...data,
    url: getStoragePublicUrl(data.image_path),
  };
};

export default getFrame;

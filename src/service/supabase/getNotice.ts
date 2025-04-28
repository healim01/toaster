import { getStoragePublicUrl, supabaseClient } from '@/service/supabase';
import { Notice } from '@/types/notice';

export const getNotice = async (): Promise<Notice> => {
  const now = new Date().toISOString();
  const { data, error } = await supabaseClient
    .from('notices')
    .select('*')
    .eq('is_active', true)
    .lte('start_at', now)
    .gte('end_at', now)
    .maybeSingle();

  if (error) throw error;
  return {
    ...data,
    url: getStoragePublicUrl(data.image_path),
  };
};

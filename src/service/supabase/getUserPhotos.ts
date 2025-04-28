import { supabaseClient } from '@/service/supabase';

export const getUserPhotos = async (userId: string) => {
  const { data, error } = await supabaseClient.storage
    .from('photos')
    .list(`${userId}/photos`, {
      limit: 100,
      sortBy: { column: 'created_at', order: 'desc' },
    });

  if (error) throw error;

  return data;
};

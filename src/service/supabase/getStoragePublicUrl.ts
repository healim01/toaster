import { supabaseClient } from '@/service/supabase';

export const getStoragePublicUrl = (filePath: string) => {
  const { data } = supabaseClient.storage.from('').getPublicUrl(filePath);

  return data.publicUrl;
};

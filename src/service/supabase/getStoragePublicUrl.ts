import { supabaseClient } from '@/service/supabase';

const getStoragePublicUrl = (filePath: string) => {
  const { data } = supabaseClient.storage.from('').getPublicUrl(filePath);

  return data.publicUrl;
};

export default getStoragePublicUrl;

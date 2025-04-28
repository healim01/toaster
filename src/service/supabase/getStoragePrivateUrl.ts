import { supabaseClient } from '@/service/supabase';

export const getStoragePrivateUrl = async (filePath: string) => {
  const { data, error } = await supabaseClient.storage
    .from('')
    .createSignedUrl(filePath, 60 * 60);

  if (error) throw error;
  return data.signedUrl;
};

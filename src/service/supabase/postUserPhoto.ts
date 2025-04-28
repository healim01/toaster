import { supabaseClient } from '@/service/supabase';

export const postUserPhoto = async ({
  userId,
  file,
}: {
  userId: string;
  file: Blob;
}) => {
  const timestamp = new Date().toISOString();
  const filePath = `${userId}/photos/${timestamp}.png`;

  const { error } = await supabaseClient.storage
    .from('photos')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    throw error;
  }
};

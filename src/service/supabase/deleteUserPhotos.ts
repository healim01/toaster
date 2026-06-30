import { supabaseClient } from '@/service/supabase';

export const deleteUserPhotos = async ({
  userId,
  photoName,
}: {
  userId: string;
  photoName: string;
}) => {
  const { error: storageError } = await supabaseClient.storage
    .from('photos')
    .remove([`${userId}/photos/${photoName}`]);

  if (storageError) throw storageError;
};

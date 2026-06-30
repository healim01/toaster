import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Photo } from '@/types/photo';
import { QUERY_KEYS } from '@/context/queryKeys';
import { deleteUserPhotos } from '@/service/supabase/deleteUserPhotos';

export const useDeleteUserPhotosMutation = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: deletePhoto, ...rest } = useMutation({
    mutationFn: deleteUserPhotos,
    onSuccess: (_, { userId, photoName }) => {
      queryClient.setQueryData<Photo[]>(
        [QUERY_KEYS.userPhotos, userId],
        old => old?.filter(photo => photo.name !== photoName) ?? [],
      );
    },
  });

  return { deletePhoto, ...rest };
};

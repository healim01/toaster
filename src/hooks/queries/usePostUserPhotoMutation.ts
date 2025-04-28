import { QUERY_KEYS } from '@/context/queryKeys';
import { postUserPhoto } from '@/service/supabase/postUserPhoto';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostUserPhotoMutation = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: uploadPhoto, ...rest } = useMutation({
    mutationFn: postUserPhoto,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.userPhotos],
        exact: false,
      });
    },
  });

  return { uploadPhoto, ...rest };
};

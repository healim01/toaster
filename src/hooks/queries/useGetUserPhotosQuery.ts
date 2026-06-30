import { getStoragePrivateUrl, getUserPhotos } from '@/service/supabase';

import { Photo } from '@/types/photo';
import { QUERY_KEYS } from '@/context/queryKeys';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useUserContext } from '@/hooks';

export const useGetUserPhotosQuery = () => {
  const { userId } = useUserContext();

  const {
    data: photos,
    isLoading,
    isError,
  } = useSuspenseQuery<Photo[]>({
    queryKey: [QUERY_KEYS.userPhotos, userId],
    queryFn: async () => {
      if (!userId) return [];

      const data = await getUserPhotos(userId);
      const photos = await Promise.all(
        data.map(async photo => ({
          ...photo,
          url: await getStoragePrivateUrl(
            `photos/${userId}/photos/${photo.name}`,
          ),
        })),
      );

      return photos;
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  return { photos, isLoading, isError };
};

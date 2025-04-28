import useUserContext from '@/hooks/useUserContext';
import { getStoragePrivateUrl, getUserPhotos } from '@/service/supabase';
import { Photo } from '@/types/photo';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useGetUserPhotosQuery = () => {
  const { user } = useUserContext();
  const {
    data: photos,
    isLoading,
    isError,
  } = useSuspenseQuery<Photo[]>({
    queryKey: ['userPhotos', user],
    queryFn: async () => {
      if (!user) return [];

      const data = await getUserPhotos(user.id);
      const photos = await Promise.all(
        data.map(async photo => ({
          ...photo,
          url: await getStoragePrivateUrl(
            `photos/${user.id}/photos/${photo.name}`,
          ),
        })),
      );

      return photos;
    },
  });

  return { photos, isLoading, isError };
};

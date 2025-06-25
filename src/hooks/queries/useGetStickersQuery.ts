import { getStickers } from '@/service/supabase/getStickers';
import { Sticker } from '@/types/sticker';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useGetStickersQuery = () => {
  const { data: stickers } = useSuspenseQuery<Sticker[]>({
    queryKey: ['stickers'],
    queryFn: getStickers,
    staleTime: 1000 * 60,
  });

  return { stickers };
};

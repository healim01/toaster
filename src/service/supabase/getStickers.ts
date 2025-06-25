import { getStoragePublicUrl, supabaseClient } from '@/service/supabase';
import { Sticker } from '@/types/sticker';

export const getStickers = async (): Promise<Sticker[]> => {
  const { data, error } = await supabaseClient.storage
    .from('stickers')
    .list('works/text', {
      limit: 1000,
      offset: 0,
      sortBy: { column: 'name', order: 'asc' },
    });

  if (error) {
    console.error('파일 목록 가져오기 실패:', error.message);
    return [];
  }

  return data.map(item => ({
    id: item.id,
    name: item.name,
    url: getStoragePublicUrl(`stickers/works/text/${item.name}`),
    created_at: item.created_at,
  }));
};

import { getStoragePublicUrl, supabaseClient } from '@/service/supabase';
import { Sticker } from '@/types/sticker';
import { getStickerThemes } from './getStickerThemes';

export const getStickers = async (): Promise<Sticker[]> => {
  const themes = await getStickerThemes();

  if (!themes || themes.length === 0) return [];

  const all: Sticker[] = [];
  for (const { theme, type } of themes) {
    const { data: files, error } = await supabaseClient.storage
      .from('stickers')
      .list(`${theme}/${type}`, {
        limit: 1000,
        sortBy: { column: 'name', order: 'asc' },
      });

    if (error) {
      console.warn(
        `❌ ${theme}/${type} 에서 스티커 가져오기 실패:`,
        error.message,
      );
      continue;
    }

    if (!files) continue;

    const stickers = files.map(file => ({
      id: `${theme}/${type}/${file.name}`,
      name: file.name,
      url: getStoragePublicUrl(`stickers/${theme}/${type}/${file.name}`),
      theme,
      type,
      created_at: file.metadata?.created_at ?? null,
    }));

    all.push(...stickers);
  }

  return all;
};

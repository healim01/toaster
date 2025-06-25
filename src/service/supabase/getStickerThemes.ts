import { supabaseClient } from '@/service/supabase/supabaseClient';
import { StickerTheme } from '@/types/sticker';

export const getStickerThemes = async (): Promise<StickerTheme[]> => {
  const { data } = await supabaseClient
    .from('stickers')
    .select('theme, type')
    .throwOnError();

  return data;
};

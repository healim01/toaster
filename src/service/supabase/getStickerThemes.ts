import { supabaseClient } from '@/service/supabase/supabaseClient';
import { StickerTheme } from '@/types/sticker';

export const getStickerThemes = async (): Promise<StickerTheme[]> => {
  const { data } = await supabaseClient
    .from('stickers')
    .select('theme, type')
    .eq('isActive', true)
    .order('created_at', { ascending: false })
    .throwOnError();

  return data;
};

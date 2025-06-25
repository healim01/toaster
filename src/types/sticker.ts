export interface Sticker {
  id: string;
  name: string;
  url: string;
  created_at: string;
}

export interface StickerTheme {
  theme: string;
  type: string;
}

export type AddedStickerItem = {
  id: string;
  src: string;
};

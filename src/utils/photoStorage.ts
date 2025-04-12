import { del, get, set } from 'idb-keyval';

const STORAGE_KEY = 'toast_photos';

export const savePhotos = async (photos: string[]) => {
  try {
    await set(STORAGE_KEY, photos);
  } catch (e) {
    console.error('IndexedDB 저장 실패', e);
  }
};

export const loadPhotos = async (): Promise<string[] | null> => {
  try {
    const photos = await get<string[]>(STORAGE_KEY);
    return photos ?? null;
  } catch (e) {
    console.error('IndexedDB 로딩 실패', e);
    return null;
  }
};

export const clearPhotos = async () => {
  try {
    await del(STORAGE_KEY);
  } catch (e) {
    console.error('IndexedDB 삭제 실패', e);
  }
};

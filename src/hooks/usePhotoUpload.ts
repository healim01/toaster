import useUserContext from '@/hooks/useUserContext';
import { supabaseClient } from '@/service/supabase';
import { buildBlobWithRetry } from '@/utils/buildBlobWithRetry';
import { isSafari } from '@/utils/isSafari';
import { useState } from 'react';

export const uploadPhoto = async (userId: string, file: Blob) => {
  const timestamp = new Date().toISOString();
  const filePath = `${userId}/photos/${timestamp}.png`;

  const { error } = await supabaseClient.storage
    .from('photos')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    throw error;
  }
};

export const usePhotoUpload = (
  downloadDivRef: React.RefObject<HTMLDivElement | null>,
) => {
  const [isSuccess, setSuccess] = useState(false);
  const { user } = useUserContext(); // 유저 정보

  const handleUpload = async () => {
    if (!downloadDivRef.current || !user) return;

    const images = downloadDivRef.current.querySelectorAll('img');
    const loadPromises = Array.from(images).map(
      img =>
        new Promise(resolve => {
          if (img.complete) return resolve(true);
          img.onload = () => resolve(true);
          img.onerror = () => resolve(true);
        }),
    );

    try {
      await Promise.all(loadPromises);
      if (isSafari()) {
        await new Promise(resolve => setTimeout(resolve, 3000));
      }

      const blob = await buildBlobWithRetry(downloadDivRef.current, isSafari());
      if (!blob) {
        console.error('Blob 생성 실패');
        return;
      }

      await uploadPhoto(user.id, blob);
      setSuccess(true);
    } catch (error) {
      console.error('사진 저장 실패:', error);
      setSuccess(false);
    }
  };

  return { handleUpload, isSuccess };
};

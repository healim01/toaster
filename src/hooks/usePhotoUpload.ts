import { useUserContext } from '@/hooks';
import { usePostUserPhotoMutation } from '@/hooks/queries/usePostUserPhotoMutation';
import { buildBlobWithRetry } from '@/utils/buildBlobWithRetry';
import { isSafari } from '@/utils/isSafari';

export const usePhotoUpload = (
  downloadDivRef: React.RefObject<HTMLDivElement | null>,
) => {
  const { user } = useUserContext();
  const { uploadPhoto, isPending, isSuccess } = usePostUserPhotoMutation();

  const handleUpload = async () => {
    if (!downloadDivRef.current || !user) return;

    const snapshot = downloadDivRef.current;
    const images = snapshot.querySelectorAll('img');
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

      const blob = await buildBlobWithRetry(snapshot, isSafari());
      if (!blob) {
        console.error('Blob 생성 실패');
        return;
      }

      await uploadPhoto({ userId: user.id, file: blob });
    } catch (error) {
      console.error('사진 저장 실패:', error);
    }
  };

  return { handleUpload, isUploading: isPending, isSuccess };
};

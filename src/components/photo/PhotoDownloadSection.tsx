import { FloatingButton, ToastMessage } from '@/components';
import { usePhotoDownload } from '@/hooks';
import { usePhotoUpload } from '@/hooks/usePhotoUpload';
import { useEffect, useState } from 'react';

const PhotoDownloadSection = ({
  downloadDivRef,
}: {
  downloadDivRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const [showUploadSuccessToast, setShowUploadSuccessToast] = useState(false);

  const { handleDownload } = usePhotoDownload(downloadDivRef);
  const { handleUpload, isSuccess, isUploading } =
    usePhotoUpload(downloadDivRef);

  useEffect(() => {
    handleUpload();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setShowUploadSuccessToast(true);

      const timeoutId = setTimeout(
        () => setShowUploadSuccessToast(false),
        3000,
      );
      return () => clearTimeout(timeoutId);
    }
  }, [isSuccess]);

  return (
    <>
      {showUploadSuccessToast && (
        <ToastMessage
          type="success"
          message="사진 업로드에 성공했습니다! 이제 내 갤러리에서 다시 볼 수 있어요!"
        />
      )}
      {isUploading && <ToastMessage message="사진을 업로드하고 있어요!" />}

      <FloatingButton
        label="사진 저장하기"
        onClick={handleDownload}
        variant="contained"
        color="pink"
        size="medium"
        round
      />
    </>
  );
};

export default PhotoDownloadSection;

import { Button, ToastMessage } from '@/components';
import { PhotoFrame } from '@/components/photo';
import { usePhotoDownload } from '@/hooks';
import { usePhotoUpload } from '@/hooks/usePhotoUpload';
import { useEffect, useRef, useState } from 'react';

const PhotoDownloadSection = () => {
  const [showToast, setShowToast] = useState(false);
  const downloadDivRef = useRef<HTMLDivElement>(null);
  const { handleDownload, isLoading } = usePhotoDownload(downloadDivRef);
  const { handleUpload, isSuccess } = usePhotoUpload(downloadDivRef);

  useEffect(() => {
    handleUpload();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  }, [isSuccess]);

  return (
    <>
      {showToast && (
        <ToastMessage message="사진 업로드에 성공했습니다! 이제 내 갤러리에서 다시 볼 수 있어요!" />
      )}
      <div className="flex flex-col items-end w-fit h-fit md:flex-row p-5 gap-5 bg-white rounded-2xl">
        {/* 사진 프레임 */}
        <div ref={downloadDivRef}>
          <PhotoFrame />
        </div>

        {/* 다운로드 버튼 */}
        <Button
          label={isLoading ? '다운로드 중...' : '사진 다운로드 🔽'}
          onClick={handleDownload}
          size="medium"
          color="pink"
        />
      </div>
    </>
  );
};

export default PhotoDownloadSection;

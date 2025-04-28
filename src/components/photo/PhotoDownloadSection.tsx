import { Button } from '@/components';
import { PhotoFrame } from '@/components/photo';
import { usePhotoDownload } from '@/hooks';
import { usePhotoUpload } from '@/hooks/usePhotoUpload';
import { useEffect, useRef, useState } from 'react';

const PhotoDownloadSection = () => {
  const downloadDivRef = useRef<HTMLDivElement>(null);
  const { handleDownload, isLoading } = usePhotoDownload(downloadDivRef);
  const { handleUpload, isSuccess } = usePhotoUpload(downloadDivRef);

  useEffect(() => {
    handleUpload();
    if (isSuccess) alert('사진 업로드 성공');
  }, []);

  return (
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

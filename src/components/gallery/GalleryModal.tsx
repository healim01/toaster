import { Button, Modal, ToastMessage } from '@/components';
import { Photo } from '@/types/photo';
import { downloadImageFromUrl } from '@/utils/downloadImageFromUrl';
import { getFormatDate } from '@/utils/getFormatDate';
import { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  photo: Photo;
}

export const GalleryModal = ({ isOpen, onClose, photo }: Props) => {
  const [showToast, setShowToast] = useState(false);

  const handleDownload = async () => {
    try {
      await downloadImageFromUrl(photo.url, `${photo.name}`);
    } catch (error) {
      console.error('Failed to download the image:', error);

      setShowToast(true);
      const timeoutId = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timeoutId);
    }
  };

  return (
    <>
      {showToast && (
        <ToastMessage
          type="error"
          message="사진 다운로드에 실패했습니다. 다시 시도해주세요"
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <img
              src={photo.url}
              alt="user photo"
              className="w-[180px] h-fit object-cover"
            />
            <div className="pt-2">
              <div className="text-sm text-gray-500 text-right">
                {getFormatDate(photo.created_at)}
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse">
            <Button label="다운받기" onClick={handleDownload} size="medium" />
          </div>
        </div>
      </Modal>
    </>
  );
};

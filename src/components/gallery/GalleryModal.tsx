import { Button, Modal } from '@/components';

import { DeletePhotoConfirm } from '@/components/gallery/DeletePhotoConfirm';
import { Photo } from '@/types/photo';
import { downloadImageFromUrl } from '@/utils/downloadImageFromUrl';
import { getFormatDate } from '@/utils/getFormatDate';
import { useDeleteUserPhotosMutation } from '@/hooks/queries/useDeleteUserPhotosMuatation';
import { useState } from 'react';
import { useToast } from '@/hooks/useToast';
import { useUserContext } from '@/hooks';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  photo: Photo;
}

export const GalleryModal = ({ isOpen, onClose, photo }: Props) => {
  const { showToast } = useToast();
  const [showConfirm, setShowConfirm] = useState(false);

  const { user } = useUserContext();
  const { deletePhoto } = useDeleteUserPhotosMutation();

  const handleDownload = async () => {
    try {
      await downloadImageFromUrl(photo.url, photo.name);
    } catch (error) {
      console.error(error);
      showToast('error', '사진 다운로드에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleRemove = async () => {
    try {
      await deletePhoto({
        userId: user?.id || '',
        photoName: photo.name,
      });

      showToast('success', '사진을 삭제했습니다.');
      setShowConfirm(false);
      onClose();
    } catch (error) {
      console.error(error);

      showToast('error', '사진 삭제에 실패했습니다. 다시 시도해주세요.');
      setShowConfirm(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {showConfirm ? (
        <DeletePhotoConfirm
          onCancel={() => setShowConfirm(false)}
          onConfirm={handleRemove}
        />
      ) : (
        <div className="flex gap-4">
          <div className="flex flex-col">
            <img
              src={photo.url}
              alt="user photo"
              className="w-[180px] h-fit object-cover"
            />

            <div className="pt-2 text-sm text-gray-500 text-right">
              {getFormatDate(photo.created_at)}
            </div>
          </div>

          <div className="flex flex-col-reverse gap-2">
            <Button
              label="삭제하기"
              variant="outlined"
              size="medium"
              onClick={() => setShowConfirm(true)}
            />

            <Button label="다운받기" size="medium" onClick={handleDownload} />
          </div>
        </div>
      )}
    </Modal>
  );
};

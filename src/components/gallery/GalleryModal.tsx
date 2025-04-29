import { Button, Modal } from '@/components';
import { Photo } from '@/types/photo';
import { downloadImageFromUrl } from '@/utils/downloadImageFromUrl';
import { getFormatDate } from '@/utils/getFormatDate';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  photo: Photo;
}

export const GalleryModal = ({ isOpen, onClose, photo }: Props) => {
  const handleDownload = async () => {
    await downloadImageFromUrl(photo.url, `${photo.name}`);
  };

  return (
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
  );
};

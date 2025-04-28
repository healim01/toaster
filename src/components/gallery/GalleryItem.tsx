import { GalleryModal } from '@/components/gallery';
import { Photo } from '@/types/photo';
import { getFormatDate } from '@/utils/getFormatDate';
import { useState } from 'react';

export const GalleryItem = ({ photo }: { photo: Photo }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    if (!isImageLoaded) return;
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <div
        onClick={handleToggleModal}
        className="w-fit p-4 rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      >
        {!isImageLoaded && (
          <div className="w-[180px] h-[500px] bg-gray-200 animate-pulse rounded-xl" />
        )}

        <img
          src={photo.url}
          alt="user photo"
          className={`w-[180px] h-fit object-cover ${
            isImageLoaded ? 'block' : 'hidden'
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />

        {isImageLoaded && (
          <div className="pt-2">
            <div className="text-sm text-gray-500 text-right">
              {getFormatDate(photo.created_at)}
            </div>
          </div>
        )}
      </div>

      {isImageLoaded && (
        <GalleryModal
          isOpen={isOpen}
          onClose={handleToggleModal}
          photo={photo}
        />
      )}
    </>
  );
};

import { GalleryItem } from '@/components/gallery';
import { useGetUserPhotosQuery } from '@/hooks/queries';

export const GallerySection = () => {
  const { photos } = useGetUserPhotosQuery();
  return (
    <div className="grid grid-cols-5">
      {photos.map(photo => (
        <GalleryItem photo={photo} />
      ))}
    </div>
  );
};

import { GalleryContentSkeleton, GalleryItem } from '@/components/gallery';
import { useGetUserPhotosQuery } from '@/hooks/queries';
import { Suspense } from 'react';

export const GallerySection = () => {
  return (
    <Suspense fallback={<GalleryContentSkeleton />}>
      <GalleryContent />
    </Suspense>
  );
};

const GalleryContent = () => {
  const { photos } = useGetUserPhotosQuery();

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {photos.map(photo => (
        <GalleryItem key={photo.name} photo={photo} />
      ))}
    </div>
  );
};

import { GallerySection } from '@/components/gallery';
import { ProfileSection } from '@/components/profile';

export const MyPage = () => {
  return (
    <div className="flex flex-col gap-5 relative w-full h-full pt-2 pb-2 mt-[50px]">
      <ProfileSection />

      <GallerySection />
    </div>
  );
};

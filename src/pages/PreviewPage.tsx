import { FrameSelectSection, PhotoFrame } from '@/components/preview';

const PreviewPage = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full gap-10 bg-amber-50">
      <PhotoFrame />
      <FrameSelectSection />
    </div>
  );
};

export default PreviewPage;

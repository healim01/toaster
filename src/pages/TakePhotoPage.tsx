import {
  CameraCapture,
  CameraFrame,
  FilterSelectSection,
} from '@/components/takePhoto';

const TakePhotoPage = () => {
  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen gap-10 bg-amber-50">
      <div className="flex flex-col">
        <CameraCapture />
        <FilterSelectSection />
      </div>
      <CameraFrame />
    </div>
  );
};

export default TakePhotoPage;

import { CameraCapture, CameraFrame } from '@/components/takePic';

const TakePicPage = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full h-full gap-10 bg-amber-50 flex-wrap">
      <CameraCapture />
      <CameraFrame />
    </div>
  );
};

export default TakePicPage;

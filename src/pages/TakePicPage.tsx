import { CameraCapture, CameraFrame } from '@/components/takePic';

const TakePicPage = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full gap-10">
      <CameraCapture />
      <CameraFrame />
    </div>
  );
};

export default TakePicPage;

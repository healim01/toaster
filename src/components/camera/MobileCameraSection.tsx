import { Button } from '@/components';
import { MobileCamera } from '@/components/camera';
import { useTakeMobilePhoto } from '@/hooks';

const MobileCameraSection = () => {
  const { videoRef, canvasRef, takePhoto } = useTakeMobilePhoto();

  return (
    <section className="flex flex-col items-center w-full h-[70dvh] bg-green-50 border-2 border-amber-400">
      <div className="relative w-full h-full border-2 border-red-600">
        <MobileCamera videoRef={videoRef} canvasRef={canvasRef} />
      </div>
      <Button label="촬영 버튼" size="full" onClick={takePhoto} />
    </section>
  );
};

export default MobileCameraSection;

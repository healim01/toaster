import Button from '@/components/_common/Button/Button';
import MobileCamera from '@/components/camera/MobileCamera';
import { useTakePhoto } from '@/hooks';

const MobileCameraSection = () => {
  const { videoRef, canvasRef, photos, takePhoto } = useTakePhoto();

  return (
    <section className="flex flex-col items-center w-full h-dvh bg-green-50">
      <div className="relative w-full h-[70dvh]">
        <MobileCamera videoRef={videoRef} canvasRef={canvasRef} />
      </div>
      <Button label="타이머 버튼 위치" size="full" onClick={takePhoto} />
    </section>
  );
};

export default MobileCameraSection;

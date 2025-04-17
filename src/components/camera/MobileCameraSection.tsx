import Button from '@/components/_common/Button/Button';
import MobileCamera from '@/components/camera/MobileCamera';
import useTakeMobilePhoto from '@/hooks/useTakeMobilePhoto';

const MobileCameraSection = () => {
  const { videoRef, canvasRef, takePhoto } = useTakeMobilePhoto();

  return (
    <section className="flex flex-col items-center w-full h-[70dvh] bg-green-50 border-2 border-amber-400">
      <div className="relative w-full h-full border-2 border-red-600">
        <MobileCamera videoRef={videoRef} canvasRef={canvasRef} />
      </div>
      <Button label="타이머 버튼 위치" size="full" onClick={takePhoto} />
    </section>
  );
};

export default MobileCameraSection;

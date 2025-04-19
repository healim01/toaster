import { MobileCamera } from '@/components/camera';
import { useTakeMobilePhoto } from '@/hooks';
import useToasterMobileRiv from '@/hooks/useToasterMobileRiv';

const MobileCameraSection = () => {
  const { videoRef, canvasRef, takePhoto } = useTakeMobilePhoto();
  const { ToasterMobileRive } = useToasterMobileRiv({
    takePhoto: takePhoto,
  });

  return (
    <section className="flex flex-col items-center w-full h-[65vh]">
      <div className="relative w-full h-full">
        <ToasterMobileRive
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            zIndex: 10,
            objectFit: 'cover',
          }}
        />
        <MobileCamera videoRef={videoRef} canvasRef={canvasRef} />
      </div>
    </section>
  );
};

export default MobileCameraSection;

import { FloatingButton } from '@/components';
import { Camera } from '@/components/camera';
import { useTakePhoto, useToasterRiv } from '@/hooks';

const CameraSection = () => {
  const { videoRef, canvasRef, takePhoto } = useTakePhoto();
  const { ToasterRive } = useToasterRiv({
    takePhoto: takePhoto,
  });

  return (
    <section className="flex flex-col items-center w-full h-[400px] md:h-[750px] max-w-[850px]">
      <div className="relative w-full h-full">
        <ToasterRive
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            zIndex: 10,
            objectFit: 'cover',
          }}
        />
        <Camera videoRef={videoRef} canvasRef={canvasRef} />
      </div>
      <FloatingButton
        label="사진 촬영"
        className="md:hidden"
        onClick={takePhoto}
      />
    </section>
  );
};

export default CameraSection;

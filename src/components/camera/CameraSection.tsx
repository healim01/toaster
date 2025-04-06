import Camera from '@/components/camera/Camera';
import useTakePhoto from '@/hooks/useTakePhoto';
import useToasterRiv from '@/hooks/useToasterRiv';

const CameraSection = () => {
  const { videoRef, canvasRef, takePhoto } = useTakePhoto();
  const { ToasterRive } = useToasterRiv({
    takePhoto: takePhoto,
  });

  return (
    <section className="flex flex-col items-center w-full h-full max-w-[900px]">
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
    </section>
  );
};

export default CameraSection;

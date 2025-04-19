import { ToastMessage } from '@/components';
import { MobileCamera } from '@/components/camera';
import { useTakeMobilePhoto, useToasterMobileRiv } from '@/hooks';
import { useEffect, useRef, useState } from 'react';

const MobileCameraSection = () => {
  const [showToast, setShowToast] = useState(false);
  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);

  const { videoRef, canvasRef, takePhoto: _takePhoto } = useTakeMobilePhoto();
  const takePhoto = () => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    setShowToast(false);
    _takePhoto();
  };

  const { ToasterMobileRive } = useToasterMobileRiv({
    takePhoto,
  });

  useEffect(() => {
    toastTimerRef.current = setTimeout(() => {
      setShowToast(true);
    }, 5000);

    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  return (
    <section className="flex flex-col items-center w-full h-[65vh]">
      {showToast && (
        <ToastMessage
          topPosition="right"
          message="카메라 속 화면을 클릭하면 사진 촬영이 시작돼요!"
          onClose={() => setShowToast(false)}
        />
      )}

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

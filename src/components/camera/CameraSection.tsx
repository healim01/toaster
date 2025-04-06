import ToasterRiveImg from '@/assets/rive/toaster.riv?url';
import Camera from '@/components/camera/Camera';
import { usePhotosContext } from '@/hooks';
import {
  EventCallback,
  EventType,
  useRive,
  useStateMachineInput,
} from '@rive-app/react-canvas';
import { useEffect, useRef, useState } from 'react';

const STATE_MACHINE_NAME = 'State Machine 1';
const BAR_CLICK_STATE = 'bar';

const CameraSection = () => {
  const { setPhotos } = usePhotosContext();

  const [, setStreamVideo] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { rive, RiveComponent } = useRive({
    src: ToasterRiveImg,
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
  });

  useEffect(() => {
    openCamera();
  }, []);

  const openCamera = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080, facingMode: 'user' },
      })
      .then(stream => {
        setStreamVideo(stream);
        const video = videoRef.current;
        if (video) {
          video.srcObject = stream;
          video.play();
        }
      })
      .catch(error => {
        console.error('Error opening camera:', error);
      });
  };

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (video && canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL('image/png');
        setPhotos(prev => [...prev, imageData]);
      }
    }
  };

  const stateToastUp = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    'isToastUp',
  );

  const stateTime = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    'time count',
  );

  const clickBar = () => {
    const time = stateTime?.value !== -1 ? Number(stateTime?.value) : 3;

    if (stateToastUp) {
      stateToastUp.value = false;

      setTimeout(() => {
        stateToastUp.value = true;
        capturePhoto();
      }, 1000 * time);
    }
  };

  useEffect(() => {
    if (!rive) return;

    const handler: EventCallback = event => {
      if (!Array.isArray(event.data)) return;

      if (event.data.includes(BAR_CLICK_STATE) && stateToastUp) {
        clickBar();
      }
    };

    rive.on(EventType.StateChange, handler);

    return () => {
      rive.off(EventType.StateChange, handler);
    };
  }, [rive, stateToastUp]);

  return (
    <section className="flex flex-col gap-4 p-4 items-center w-full h-full max-w-[830px] mx-auto">
      <div className="relative w-full h-full">
        <RiveComponent
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

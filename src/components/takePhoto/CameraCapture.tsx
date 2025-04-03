import { Button, Dropdown } from '@/components';
import { Filter } from '@/constants/filter';
import { useFilterContext, usePhotosContext } from '@/hooks';
import { useEffect, useRef, useState } from 'react';

const CameraCapture = () => {
  const { setPhotos } = usePhotosContext();

  const [, setStreamVideo] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { filter } = useFilterContext();

  const [timer, setTimer] = useState<number>(3);
  const [leftTime, setLeftTime] = useState<number>(3);

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

  const takePhoto = () => {
    if (timer) {
      const leftTime = setInterval(() => {
        setLeftTime(prev => prev - 1);
      }, 1000);

      setTimeout(() => {
        capturePhoto();
        clearInterval(leftTime);
        setLeftTime(timer);
      }, timer * 1000);
    }
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

  return (
    <div className="flex flex-col gap-2">
      <video
        ref={videoRef}
        className="w-[540px] scale-x-[-1] aspect-[3/2] object-cover object-center"
        style={{
          filter: Filter[filter],
        }}
      />
      <div>{leftTime}</div>
      <div className="flex flex-row justify-center gap-10">
        <Dropdown
          label={timer ? `${timer}초` : '타이머'}
          items={['3초', '5초']}
          selectedItem={timer?.toString() || null}
          setSelectedItem={(item: string) =>
            setTimer(Number(item.replace('초', '')))
          }
        />
        <Button label="사진 찍기" color="gray" onClick={takePhoto} />
      </div>
      <canvas
        className="hidden"
        ref={canvasRef}
        width="2400"
        height="1600"
      ></canvas>
    </div>
  );
};

export default CameraCapture;

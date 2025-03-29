import { Button, Dropdown } from '@/components';
import { useFilterContext, usePhotosContext } from '@/hooks';
import { useEffect, useRef, useState } from 'react';

const CameraCapture = () => {
  const { setPhotos } = usePhotosContext();

  const [, setStreamVideo] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { filter, setFilter } = useFilterContext();

  const [timer, setTimer] = useState<number>(3);
  const [leftTime, setLeftTime] = useState<number>(3);

  useEffect(() => {
    openCamera();
  }, []);

  const openCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
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
        setLeftTime(prev => (prev -= 1));
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

  const applyFilter = () => {
    const filter = 'grayscale(20%) brightness(1.1) contrast(110%) blur(1px)';
    setFilter(filter);
  };

  return (
    <div className="flex flex-col gap-2">
      <video
        ref={videoRef}
        width="540"
        className="w-[540px] scale-x-[-1] aspect-[3/2] object-cover object-center"
        style={{
          filter: filter,
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
        <Button label="필터 추가" color="green" onClick={applyFilter} />
      </div>
      <canvas
        className="hidden"
        ref={canvasRef}
        width="720"
        height="480"
      ></canvas>
    </div>
  );
};

export default CameraCapture;

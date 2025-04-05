import { toasterImg } from '@/assets/imgs';
import { Button, Dropdown } from '@/components';
import { usePhotosContext } from '@/hooks';
import { useEffect, useRef, useState } from 'react';

const CameraSection = () => {
  const { setPhotos } = usePhotosContext();

  const [, setStreamVideo] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [timer, setTimer] = useState<number>(3);
  const [isTakingPhoto, setIsTakingPhoto] = useState(false);
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
    if (isTakingPhoto || !timer) return;

    setIsTakingPhoto(true);
    const leftTime = setInterval(() => {
      setLeftTime(prev => prev - 1);
    }, 1000);

    setTimeout(() => {
      capturePhoto();
      clearInterval(leftTime);
      setLeftTime(timer);
      setIsTakingPhoto(false);
    }, timer * 1000);
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
    <section className="flex flex-col gap-4 p-4 items-center w-full max-w-[830px] mx-auto">
      <div className="relative w-full aspect-[830/467]">
        <img
          src={toasterImg}
          className="w-full h-full object-cover rounded-xl"
        />
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 w-4/5 max-w-[450px] aspect-video 
             -translate-x-1/2 -translate-y-1/2 scale-x-[-1] object-contain 
             z-20 rounded-2xl shadow-md"
        />
      </div>

      <div className="text-center text-xl font-semibold">{leftTime}</div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Dropdown
          label={timer ? `${timer}초` : '타이머'}
          items={['1초', '3초', '5초']}
          selectedItem={timer?.toString() || null}
          setSelectedItem={(item: string) =>
            setTimer(Number(item.replace('초', '')))
          }
        />
        <Button
          label="사진 찍기"
          color="blue"
          onClick={takePhoto}
          disabled={isTakingPhoto}
        />
      </div>

      <canvas
        className="hidden"
        ref={canvasRef}
        width="1920"
        height="1080"
      ></canvas>
    </section>
  );
};

export default CameraSection;

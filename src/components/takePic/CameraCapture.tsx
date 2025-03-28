import Button from '@/components/_common/Button/Button';
import { useFilterContext, usePhotosContext } from '@/hooks';
import { useEffect, useRef, useState } from 'react';

const CameraCapture = () => {
  const { setPhotos } = usePhotosContext();

  const [, setStreamVideo] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { filter, setFilter } = useFilterContext();

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

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (video && canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        // 비디오 화면을 캔버스에 그리기
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        // 캔버스를 이미지로 변환
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
      <div className="flex flex-row justify-center gap-10">
        <Button label="사진 찍기" color="gray" onClick={capturePhoto} />
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

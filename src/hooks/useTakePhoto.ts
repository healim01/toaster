import { usePhotosContext } from '@/hooks';
import { useEffect, useRef, useState } from 'react';

const useTakePhoto = () => {
  const { setPhotos } = usePhotosContext();

  const [, setStreamVideo] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const openCamera = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 1920,
          height: 1080,
          facingMode: 'user',
        },
      })
      .then(stream => {
        setStreamVideo(stream);
        const video = videoRef.current;
        if (video) {
          video.srcObject = stream;
          video.onloadedmetadata = () => {
            video.play();
          };
        }
      })
      .catch(error => {
        console.error('Error opening camera:', error);
      });
  };

  const takePhoto = () => {
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

  useEffect(() => {
    openCamera();
  }, []);

  return { videoRef, canvasRef, takePhoto };
};

export default useTakePhoto;
